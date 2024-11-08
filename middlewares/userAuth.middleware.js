const jwt = require("jsonwebtoken");

const generateAccessToken = (user) => {
    console.log('ACCESS_TOKEN_EXPIRY:', process.env.ACCESS_TOKEN_EXPIRY); // Check this line
    console.log("user====",user);
    

  return jwt.sign({ userId: user }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
  });
};

const generateRefreshToken = (user) => {
  return jwt.sign({ userId: user }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
  });
};

const verifyAccessToken = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1]; // Assuming Bearer token format

  if (!token) {
    return res.status(403).json({ message: "Access token is required" });
  }

  jwt.verify(token, ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res
        .status(403)
        .json({ message: "Invalid or expired access token" });
    }

    req.user = user; // Attach the decoded user to the request object
    next();
  });
};

const verifyRefreshToken = (req, res, next) => {
  const token = req.body.refreshToken || req.query.refreshToken;

  if (!token) {
    return res.status(403).json({ message: "Refresh token is required" });
  }

  jwt.verify(token, REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res
        .status(403)
        .json({ message: "Invalid or expired refresh token" });
    }

    req.user = user; // Attach the decoded user to the request object
    next();
  });
};

module.exports = {
  generateAccessToken,
  generateRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,
};

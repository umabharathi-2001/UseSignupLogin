const db = require("../models/index");
const bcrypt = require("bcrypt");
const auth=require('../middlewares/userAuth.middleware')

const userSignup = async (req) => {
  const hashedPassword = await bcrypt.hash(req.password, 10);
  req.password = hashedPassword;

  const user = await db.userProfile.create(req);
  user.createdBy = user.userId;
  user.modifiedBy = user.userId;
  user.save();
  return user;
};

const userLogin = async (email, password) => {
  const user = await db.userProfile.findOne({ where: { email } });
  if (!user) throw new Error("User not found");

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) throw new Error("Invalid password");
  console.log(user.userId);
  console.log(user);
  const token = auth.generateAccessToken(user.userId);
  return { user, token };
};

module.exports = {
  userSignup,
  userLogin,
};

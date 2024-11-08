const express = require("express");
const router = express.Router();
const userRouter = require("./user.route");
const chatImportRouter = require("./chatImport.route");
router.use("/user", userRouter);
router.use("/chat", chatImportRouter);

module.exports = router;

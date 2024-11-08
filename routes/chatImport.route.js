const express = require("express");
const multer = require("multer");
const chatImportController = require("../controllers/chatImport.controller");

const router = express.Router();

const upload = multer({ dest: "uploads/" });

router.post(
  "/import-chat",
  upload.single("file"),
  chatImportController.importChat
);

module.exports = router;

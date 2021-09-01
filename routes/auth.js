const express = require("express");
const router = express.Router();
const { authenticateUserLogin } = require("../controllers/auth")

router.post("/user", authenticateUserLogin);

module.exports = router;
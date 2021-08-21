const express = require("express");
const router = express.Router();
const { authenticateUserLogin } = require("../controllers/authControllers")

router.post("/user", authenticateUserLogin);

module.exports = router;
const express = require("express");
const AuthController = require("../controller/auth");
const router = express.Router();

router.post("/register", AuthController.register);

module.exports = router;

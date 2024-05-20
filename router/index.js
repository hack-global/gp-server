const express = require("express");
const AuthController = require("../controller/auth");
const MovieController = require("../controller/movies");
const router = express.Router();

router.post("/register", AuthController.register);

router.get("/movies", MovieController.getAllMovies);

module.exports = router;

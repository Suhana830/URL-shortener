const express = require("express");
const User = require("../constrollers/user")
const router = express.Router();

router.post("/login",User.LoginUser)

router.post("/signup",User.createUser)


module.exports = router;
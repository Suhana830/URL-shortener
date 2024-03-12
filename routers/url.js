const express = require("express");
const Url = require("../constrollers/url")

const router = express.Router();

router.post("/",Url.CreateUrl)

module.exports = router;
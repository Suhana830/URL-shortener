const express = require("express");
const Url = require("../constrollers/url")
const URL = require("../models/url")


const router = express.Router();

router.post("/",Url.CreateUrl)
router.get("/:shortId", async (req, res) => {
    const shortId = req.params.shortId;
    console.log("shortId");
    const entry = await URL.findOne({Short_Id:shortId});
    console.log(entry)
    res.redirect(entry.Original_Id);
  });

module.exports = router;
const express = require("express");
const Url = require("../models/url")

const router = express.Router();

router.get("/",(req,res)=>{
    return res.render("url");
})

router.get("/login",(req,res)=>{
    return res.render("login");
})

router.get("/signup",(req,res)=>{
    return res.render("signup");
})

router.get("/:ShortId",async(req,res)=>{
    const shortid = req.params.ShortId;
   
    const OriginalId =await Url.findOne({Short_Id:shortid});
    if(!OriginalId)
    return res.redirect("/");

    console.log(OriginalId);

   
    res.redirect(OriginalId.redirectUrl);

})

module.exports = router;
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



module.exports = router;
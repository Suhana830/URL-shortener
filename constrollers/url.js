const Url = require("../models/url");
var ids = require('short-id');

exports.CreateUrl = async(req,res)=>{

    const {url} = req.body;
    if(!url)
    {
        return res.redirect("/")
    }
    const shortid = ids.generate();

    await Url.create({
        Short_Id:shortid,
        Original_Id:url
    });

    const user_url = await Url.findOne({Short_Id:shortid});
    console.log(user_url)

    return res.redirect("/");


}
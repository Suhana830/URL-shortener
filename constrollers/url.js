const Url = require("../models/url");
var ids = require('short-id');

exports.CreateUrl = async(req,res)=>{

    const {url,des} = req.body;
    if(!url)
    {
        return res.redirect("/")
    }
    const shortid = ids.generate();

    await Url.create({
        Short_Id:shortid,
        Original_Id:url,
        Description:des
    });



    const user_url = await Url.findOne({Short_Id:shortid});
    console.log(user_url)

    const allurls = await Url.find({});
    console.log(allurls)

    return res.render("url",{
        urls:allurls
    });


}

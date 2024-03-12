const Url = require("../models/url");
var ids = require('short-id');

exports.CreateUrl = async(req,res)=>{

    const {url,des} = req.body;
    if(!url && !des)
    {
        return res.redirect("/")
    }
    const shortid = ids.generate();

    if (!req.cookies.uid) {
        res.send('UID cookie is not present');
    } 

    const user = req.cookies.uid;
    await Url.create({
        Short_Id:shortid,
        Original_Id:url,
        Description:des,
        createdBy:user.id
    });



    const user_url = await Url.findOne({Short_Id:shortid,createdBy:user.id});
    console.log(user_url)

    const allurls = await Url.find({});
    console.log(allurls)

    return res.render("url",{
        urls:allurls
    });


}

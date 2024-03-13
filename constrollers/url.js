const Url = require("../models/url");
var ids = require('short-id');
const {decodedToken} = require("../service/Auth")

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

    const user = decodedToken(req.cookies.uid);
    console.log(user.id);


    

    await Url.create({
        Short_Id:shortid,
        Original_Id:url,
        Description:des,
        createdBy:user.id
    });



    // const user_url = await Url.findOne({});
    // console.log(user_url)

    const allurls = await Url.find({ createdBy:user.id})
    console.log(allurls)

    return res.render("url",{
        urls:allurls
    });


}

const User = require("../models/user")
const {generateToken} = require("../service/Auth")

exports.createUser = async(req,res)=>{
 

    const {name,email,password} = req.body;
    await User.create({
        name,
        email,
        password
    });

    const user = await User.findOne({email:email});
    console.log(user);

    const token = generateToken(user);
    res.cookie("uid",token);
    console.log("cookie created");

    return res.redirect("/");
}

exports.LoginUser = async(req,res)=>{

    const {email,password} = req.body;
    console.log("hello");
    const user = await User.findOne({email:email,password:password});
    if(!user)
    return res.redirect("/login");

    console.log(user);
    const token = generateToken(user);
    res.cookie("uid",token);
    console.log("cookie created");

    return res.redirect("/");
    
}
const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    first:{
        type:String,
        require:true,

    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,

    }
});

const User = new mongoose.model("user",UserSchema);

module.exports = User;
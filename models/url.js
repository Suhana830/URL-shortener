const mongoose = require("mongoose")

const UrlSchema = new mongoose.Schema({
    Short_Id:{
        type:String,
        require:true,

    },
    Original_Id:{
        type:String,
        require:true,
        unique:true
    },
   
});

const Url = new mongoose.model("url",UrlSchema);

module.exports = Url;
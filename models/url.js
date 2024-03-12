const mongoose = require("mongoose")

const UrlSchema = new mongoose.Schema({
    Short_Id:{
        type:String,
        require:true,
        unique:true

    },
    Original_Id:{
        type:String,
        require:true,
        
    },
    // createdBy:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:"user"
    // }
   
});

const Url = new mongoose.model("url",UrlSchema);

module.exports = Url;
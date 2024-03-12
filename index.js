const express = require("express");
//mongoose is use to connect with mongodb
const mongoose = require("mongoose");
const app = express();


//router
const StaticRouter = require("./routers/staticRouter");
const userRouter = require("./routers/user")
const urlRouter = require("./routers/url")

//establish a connection
mongoose.connect("mongodb://127.0.0.1:27017/Short_url_DataBase").then(()=>console.log("mongodb connected"));
// middleware
app.use(express.urlencoded({extended:false}))
app.set("view engine", "ejs");
// app.use(cookieParser());

app.use("/",StaticRouter)
app.use("/user",userRouter)
app.use("/url",urlRouter)





app.listen(8001,()=>{ console.log( "server connected")});
const express = require("express");
const app = express();
app.listen(3000); // se poia porta tha akouei
app.get("/",(req,res)=>{ // req = request , res = response
    res.sendFile(__dirname + "/views/home.html");

});
app.get("/about",(req,res)=>{
    res.send("<h1>about</h1>");
});
app.get("/contact",(req , res)=>{
    res.send("<h1>contact</h1>");
});
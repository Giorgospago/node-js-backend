const express = require("express");
const app = express();
const products = require("./products.json");

app.listen(3000); // se poia porta tha akouei

app.get("/",(req,res)=>{ // req = request , res = response
    res.sendFile(__dirname + "/views/home.html");
});

app.get("/products",(req,res)=>{
    res.json(products);
});
app.get("/product/:productId",(req,res)=>{
    const id = req.params.productId;
    let productFound = null;
    for ( let p of products){
        if( p._id == id ){
            productFound = p;
        }

    }
    //res.json(productFound);
    res.send(productFound.name);

});

app.get("/product-v2/:productId",(req,res)=>{
    const id = req.params.productId;
    const productFound = products.find(p=>p._id == id);
    res.send(productFound.name);
});

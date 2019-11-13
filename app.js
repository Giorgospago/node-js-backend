const express = require("express");
const chalk = require("chalk");
const products = require("./products.json");
const app = express();
app.listen(3000);
app.get("/",(req,res)=>{
    res.send("Welcome to our store");
});
app.get("/products",(req,res)=>{
    res.json(products);

});
console.log(products[1].price);
console.table(products);
console.log("To katastima mas exei " + products.length + " proionta");

let sum = 0;
let max = 0;
let min = products[0].price;
for (let i = 0; i < products.length; i++) {

    if (max < products[i].price) {
        max = products[i].price;
    }

    if (min > products[i].price) {
        min = products[i].price;

    }
    if (products[i].sale < min) {
        min = products[i].sale;
    }
    sum = sum + products[i].price;
    if (products[i].sale) {
        console.log(products[i].name + " " + ":" + products[i].sale + "€");
    } else {
        console.log(products[i].name + " " + ":" + products[i].price + "€");
    }

}
console.log("To athroisma einai: " + sum);
console.log("O mesos oros einai: " + sum / 4);
console.log(" o max einai: " + chalk.cyan(max));
console.log(" o min einai: " + chalk.magenta(min));



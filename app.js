var express = require("express");
var app = express();
var path = require("path");
const mongoose = require('mongoose');


app.use(express.static("public"));

app.set('views', path.join(__dirname, 'views'));
app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("index");
});

app.get("/service");

const PORT = process.env.PORT || 5000;
app.listen(PORT,() => console.log("servers started on port"));

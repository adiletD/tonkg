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

app.get("/nalog",function(req,res){
    res.render("nalog");
});

app.get("/socfond",function(req,res){
    res.render("socfond");
});

app.get("/telecom",function(req,res){
    res.render("telecom");
});

app.get("/res",function(req,res){
    res.render("res");
});

app.get("/akimiat",function(req,res){
    res.render("akimiat");
});

app.get("/socrazvitie",function(req,res){
    res.render("socrazvitie");
});

app.get("/zags",function(req,res){
    res.render("zags");
});

app.get("/archive",function(req,res){
    res.render("archive");
});

app.get("/architect",function(req,res){
    res.render("architect");
});

app.get("/cadaster",function(req,res){
    res.render("cadaster");
});



const PORT = process.env.PORT || 5000;
app.listen(PORT,() => console.log("servers started on port"));

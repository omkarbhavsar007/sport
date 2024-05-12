var express = require("express");
var app = express();

app.use(express.static("public/"));

app.get("/",function(req,res){
    res.render("home.ejs");
});

app.get("/about",function(req,res){
    res.render("about.ejs");
});

app.get("/team",function(req,res){
    res.render("team.ejs")
})

app.get("/news",function(req,res){
    res.render("news.ejs")
})

app.get("/blog",function(req,res){
    res.render("blog.ejs")
})

app.get("/contact",function(req,res){
    res.render("contact.ejs")
})

app.listen(1000);
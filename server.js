var express = require("express");
var server = express();
var router = express.Router();
var path = __dirname + '/views/';

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/about",function(req,res){
  res.sendFile(path + "about.html");
});

router.get("/contact",function(req,res){
  res.sendFile(path + "contact.html");
});

server.use("/",router);

server.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

server.listen(3000,function(){
  console.log("Access website at Localhost Port 3000");
});
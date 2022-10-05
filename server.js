var express = require("express");
var app = express();

var HTTP_PORT = process.env.PORT || 8080;

var path = require("path");

// call this function after the http server starts listening for requests
function onHttpStart() {
  console.log("Express http server listening on: " + HTTP_PORT);
}
app.get("/", function(req,res){
    res.send("<h2>Declaration</h2><p> I declare that this is my own work in accordance with Seneca Academic Policy. No part of this test has been copied manually or electronically from any other source.<br/> <br/>Name: Kanwar Preet Kaur <br/>Student Number : 165575218<br/><a href='/Test1'><br/>Go to Test1</a>");
});
app.get("/Test1", function(req,res){
    res.sendFile(path.join(__dirname,"/views/Test1.html"));
  });
  

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT, onHttpStart);
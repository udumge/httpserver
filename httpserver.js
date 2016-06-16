"use strict";

var http = require("http");
var fs = require("fs");

var htmldata = "";
fs.readFile("./n01.html","utf-8",function(err,data){
  if(err) console.log("error : " + err);
  console.log(data);
  htmldata = data;
});

var srv = http.createServer(function(req,res){
  res.writeHead(200,{"Content-Type": "text/html"});
  res.end(htmldata);
});

srv.listen(8888,"127.0.0.1");

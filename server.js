"use strict";

var favicon = require('serve-favicon');
var path = require('path');
var express = require("express");
var app = express();

app.get('/', function(req, res) {

  console.log('headers:', req.headers);

  var ip = req.headers["x-forwarded-for"];
  var lang = req.headers["accept-language"];
  var os = req.headers["user-agent"];

  lang = lang.match(/^[^,]*/);
  os = os.match(/\(([^)]+)\)/);

  var object = {
    "ipaddress": ip.slice(0, ip.indexOf(',')),
    "language": lang[0],
    "software": os[0].slice(1, -1)
  };
  console.log('object:', object);

  // res.send(req.headers);
  res.send(object);
});

app.listen(8080, function() {
  console.log('Listening on port 8080');
});

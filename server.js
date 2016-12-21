var express = require("express");
var app = express();

app.get('/', function(req, res) {
    
    var ip = req.headers["x-forwarded-for"];
    var lang= req.headers["accept-language"];
    var os = req.headers["user-agent"];
    
    lang = lang.match(/^[^,]*/);
    os = os.match(/\(([^)]+)\)/);
    
    var object = {"ipaddress": ip, "language": lang[0], "software": os[0].slice(1,-1)};
    
   // res.send(req.headers);
    res.send(object);
});

app.listen(8080, function() {
   console.log('Listening on port 8080'); 
});
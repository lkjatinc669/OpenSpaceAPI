var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

// use port 3000 unless there exists a preconfigured port
var port = process.env.PORT || 3000;

app.listen(port, function (err) {
    if(err){
        console.log("Error Occured")
    } else {
        console.log("App Started on http://localhost:"+port)
    }
});
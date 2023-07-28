var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('Hello World!');
});


app.listen(port, function (err) {
    if(err){
        console.log("Error Occured")
    } else {
        console.log("App Started on http://localhost:"+port)
    }
});
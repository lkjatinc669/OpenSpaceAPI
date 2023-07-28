var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

const webRoute = require('./src/routes/webRoutes')
const apiRoute = require('./src/routes/apiRoutes')

app.use("/", webRoute)
app.use("/api", apiRoute)

app.listen(port, function (err) {
    if(err){
        console.log("Error Occured")
    } else {
        console.log("App Started on http://localhost:"+port)
    }
});
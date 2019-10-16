var express = require('express');
app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

 var cors =require('cors');
mongoose.connect('mongodb://localhost:27017/register');
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type', 'x-access-token');

    next();
});
//  app.use(cors());


app.use('/v1', require('./routes'));
app.listen(8080);



/**
 * Created by petar on 3/21/15.
 */

var express = require ('express'),
    bodyParser = require('body-parser'),
    app = express();

//third party middleware
app.use(bodyParser.urlencoded());

// custom middleware
app.use(function(req, res, next){
    console.log('this will log on every request');
});

// route functions
var names = [];

app.all('/user', function (req, res, next){
    req.users = [];
    next();
});

app.get('/', log, function(req, res){
    res.render('index.jade', {names: names});
});

app.post('/', function(req, res){
    names.push(req,body.name);
    res.redirect('/');
});

//app.put
//app.delete

//build-in middleware
app.use(express.static('./public'));

app.listen(3000);
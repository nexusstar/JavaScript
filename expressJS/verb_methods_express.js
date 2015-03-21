/**
 * Created by p.nikov on 20.3.2015 г..
 */

//GET - Read
//POST - Create
//PUT - Update
//DELETE - Deleate

var express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

var names = [];

app.all('/', function(res, req, next){
    console.log('from all');
    next();
});

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function(req, res){
    res.render('index.jade', {names: names})
});

app.post('/', function(req,res){
    names.push(req.body.name);
    res.redirect('/')
});

app.listen(3000);
/**
 * Created by petar on 3/21/15.
 */

var express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

app.use(bodyParser.urlencoded());

var name = [];

app.route('/')
    .all(function(req, res, next){
        console.log('this logs on all verbs');
        next();
    })
    .get(function(req, res, next){
        console.log(names);
    },function (req, res){
        res.render('home.jade', {names:names});
    })
    .post(function(req, res){
        names.push(req.body.name);
        res. redirect('/');
    });

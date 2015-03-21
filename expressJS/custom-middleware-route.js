/**
 * Created by petar on 3/21/15.
 */

var express = require('express'),
    app = express();

app.param('name', function(req, res, next, name){
   req.name = name[0].toUpperCase() + name.substring(1);
});

app.get('/name/:name', function(req,res){
    res.send('Your name is ' + req.param.name);
});

app.listen(3000);

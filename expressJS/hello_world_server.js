/**
 * Created by p.nikov on 20.3.2015 г..
 */

/**
 * @desc Hello world express app
 * @type {*|exports}
 */

var express = require('express'),
    app = express();

app
    .get('/', function( req, res ){
        res.send('Hello Express');
    })
    .listen(3000, function(){
        console.log("listening on port 3000");
    });

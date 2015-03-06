/**
 * Created by p.nikov on 10.11.2014 г..
 */
'use strict';

var prompt = require('prompt');
var userX, userO;


    prompt.start();
    prompt.get(['username', 'email'], function(err, result){
        userX = result.username;
    });
    if (userX === 'Yes'){
        console.log('yes');
    }




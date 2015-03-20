/**
 * Created by p.nikov on 20.3.2015 г..
 */
/**
 * @desc: View  example
 */

var express = require ('express');
app = express();

app.get('/', function(req, res){
    res.render('view.jade');
})
    .listen(3000, function(){
        console.log("listening on port 3000");
    });

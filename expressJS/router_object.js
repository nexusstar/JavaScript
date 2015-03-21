/**
 * Created by petar on 3/21/15.
 */

var express = require('express'),
    bodyParser = require('body-parser'),
    app = express();


var router = express.Router();

router.use(function (req, res, next){
    console.log('router specific middleware');
    next();
});

router.get('/', function(req,res){
    res.send('router home route');
});

router.route('/test').get(function (req, res){
    res.send('router test route')
});

app.use('/api', router);

app.listen(3000);
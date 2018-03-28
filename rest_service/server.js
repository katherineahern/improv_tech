// server.js

// BASE SETUP
// =============================================================================
var mongoose   = require('mongoose');
mongoose.connect('mongodb://Katherines-MBP.attlocal.net:27017/line_hat'); // connect to our database

var LineHat     = require('./app/models/lineHat');

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});


// more routes for our API will happen here

router.route('/lines')

    // create a line (accessed at POST http://localhost:8080/api/lines)
    .post(function(req, res) {
    	console.log("New something: " + mongoose.connection.readyState);
        var line = new LineHat();      // create a new instance of the LineHat model
        line.line = req.body.line;  // set the line (comes from the request)
        var d = new Date();
        line.timestamp = d.getTime();
        console.log(line);
        // save the line and check for errors
        line.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Line created!' });
        });

    })

    .get(function(req, res) {
        LineHat.find(function(err, lines) {
            if (err)
                res.send(err);

            res.json(lines);
        });
    });


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);

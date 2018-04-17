// server.js

// BASE SETUP
// =============================================================================
var mongoose   = require('mongoose');
//for running locally
//mongoose.connect('mongodb://Katherines-MBP.attlocal.net:27017/line_hat'); // connect to our database

//for running on AWS
mongoose.connect('mongodb://localhost:27017/line_hat'); // connect to our database

var LineHat     = require('./app/models/lineHat');
var currentLine = 0;

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

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



router.route('/currentLine')

    .get(function(req, res) {
        console.log(currentLine);
        currentLine++;
        res.json({ currentLine: currentLine });
    });

router.route('/deleteLine')

    .post(function(req, res) {
        console.log("getting delete request");
        console.log(req.body.timestamp);
        var line = new LineHat();      // create a new instance of the LineHat model
        LineHat.find({ timestamp: req.body.timestamp }).remove().exec();
    });

router.route('/resetCurrentLine')

    .post(function(req, res) {
        console.log("getting reset counter request");
        currentLine = 0;
    });


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);

//websocket implementation part

const WebSocket = require('ws');
 
const wss = new WebSocket.Server({ port: 2222 });

wss.on('connection', function connection(ws) {
    
  ws.on('message', function incoming(message) {
    console.log(message);
    try {
        msg = JSON.stringify(message);
        
    } catch (e) {
        console.log(message);
        ws.send(message);

        console.log(e);
    }
    wss.clients.forEach(function each(client) {
        var messageString = message.toString();
        client.send(messageString);
    });
    console.log('received: %s', message);
    //ws.send(message);
    ws.send("message from incoming" + message);
  });
  console.log('got connection');
  
});

const newChoiceWebsocket = new WebSocket.Server({ port: 4444 });

newChoiceWebsocket.on('connection', function connection(ws) {
    console.log("New choice connection");
    ws.on('message', function incoming(message) {
        console.log(message);
        newChoiceWebsocket.clients.forEach(function each(client) {
            var messageString = message.toString();
            client.send(messageString);
        });
    });
    //get new choice message

    //send new choice message
});

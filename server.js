// server.js
    // require('newrelic'); //so heroku doesnt time out my server :(

    // set up ========================
    var express  = require('express');
    var app      = express();                               // create our app w/ express
    // var mongoose = require('mongoose');                     // mongoose for mongodb
    var morgan = require('morgan');             // log requests to the console (express4)
    var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
    var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

    // port var for heroku
    var port = process.env.PORT || 8080;

    // configuration =================

    // mongoose.connect('mongodb://node:node@mongo.onmodulus.net:27017/uwO3mypu');     // connect to mongoDB database on modulus.io

    app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
    app.use(morgan('dev'));                                         // log every request to the console
    app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
    app.use(bodyParser.json());                                     // parse application/json
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
    app.use(methodOverride());

    // backend routes
    app.get('/api/sites', function(req, res) {
        res.sendfile('./data/sites.json');
    });

    app.get('/api/education', function(req, res) {
        res.sendfile('./data/education.json');
    });

    app.get('/api/experience', function(req, res) {
        res.sendfile('./data/experience.json');
    });

    app.get('/api/publications', function(req, res) {
        res.sendfile('./data/publications.json');
    });

    app.get('/*', function(req, res) {
        res.sendfile('./public/index.html');
    });

    // listen (start app with node server.js) ======================================
    app.listen(port, function() {
        console.log('Our app is running on http://localhost:' + port);
    });

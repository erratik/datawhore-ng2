// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
var mongoose = require('mongoose');  // mongoose for mongodb

// Get our API routes
const api = require('./server/routes/api');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', api);


//**!// Connect to our mongo database
mongoose.connect('mongodb://erratik:zombie@ds013911.mlab.com:13911/heroku_1lcg0vzs'+ '?authMechanism=SCRAM-SHA-1');
//mongoose.connect('mongodb://localhost/datawhore');

mongoose.connection.on('error', function(err){
  console.log('connect with: ', 'mongodb://erratik:zombie@ds013911.mlab.com:13911/heroku_1lcg0vzs');
  console.log(err);
}).on('connect', function(){
  console.log('connect with: ', 'mongodb://erratik:zombie@ds013911.mlab.com:13911/heroku_1lcg0vzs');
  // console.log(err);
});


// Catch all other routes and return the index file
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist/index.html'));
// });

app.get('/*', function (req, res) {
  // res.sendFile('index.html');
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});


/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));

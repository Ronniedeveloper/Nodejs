const  os = require('os');
const http = require('http');
const dns = require('dns');
const mongodb = require('mongodb').MongoClient;

// MongoDB connection string
const url = 'mongodb://localhost:27017';

// Port
const port = 4000;

// Server with pure Nodejs
const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.send('Nodejs server up and running');
})

mongodb.connect(url,(err,db) => {
    if(err) throw err;
    console.log('Connected to Database');
})

server.listen(() => {
    console.log('server running on port ' + port)
})



 
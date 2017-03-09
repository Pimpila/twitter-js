var express = require('express');
var nunjucks = require('nunjucks');
var app = express();
var tweetBank = require('./tweetBank.js');
var routes = require('./routes');
var bodyParser = require('body-parser')
app.use(express.static('public'));

nunjucks.configure('views', {noCache: true});

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks

app.use('/', bodyParser.json(), bodyParser.urlencoded(), routes);
// tell app to use routes and bodyParser.json and urlencoded - json and urlencoded specify type of text to parse

app.listen(3000, function() {
    console.log('server listening')
})

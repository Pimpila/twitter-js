var express = require('express');
var nunjucks = require('nunjucks');
var app = express();
var tweetBank = require('./tweetBank.js');

var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};

nunjucks.configure('views', {noCache: true});

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks

app.use(function(req, res, next) {
    
	res.render( 'index', locals);
    
});


app.listen(3000, function() {
    console.log('server listening')
})

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

// nunjucks.render('index.html', locals, function (err, output) {
//     console.log(output);
// });

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks

app.use(function(req, res, next) {
    // log method and path props on req obj
    // log statusCode prop on res obj
 //    res.render('index', locals, function(err, html) {
 //  		res.send(html);
	// });
	res.render( 'index', locals);
    console.log(req.method, req.path, res.statusCode);
    // next();
});

// this logs anytime a client request begins with /special (can't be in middle of route)
// app.use('/special', function(req, res, next) {
//     console.log('you have reached a special area')
// })

// app.get('/', function(req, res, next) {
//     res.send('welcome!')
// })

// app.get('/news', function(req, res, next) {
//     res.send('welcome to news')
// })

app.listen(3000, function() {
    console.log('server listening')
})

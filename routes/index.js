const express = require('express');
const router = express.Router();

// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');
router.use(express.static('public'))

// set this more specific .get case first
router.get('/users/:name', function (req, res) {
  var name = req.params.name;
  var tweets = tweetBank.find(function(element) {return element.name === name;}); // returns a filtered obj.
  console.log("user", tweets);
  // nunjucks template works like this: { } === templated field that get's passed to index.html template
  res.render( 'index', { tweets: tweets } ); // { obj: {obj}, {obj}, {obj} } // every {obj} value gets passed to template
});

router.get('/', function (req, res, next) {
  let tweets = tweetBank.list();
  console.log("all", tweets);
  res.render( 'index', { tweets: tweets });
});

router.get('/stylesheets/style.css', function (req, res) {
  res.sendFile('/stylesheets/style.css');
});

module.exports = router;

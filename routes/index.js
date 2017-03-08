const express = require('express');
const router = express.Router();

// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');
router.use(express.static('public'))

// set this more specific .get case first
router.get('/users/:name', function (req, res) {
  var userName = req.params.name;
  var tweetsWithUserName = tweetBank.find({name: userName}); // returns a filter obj
  // nunjucks template works like this: { } === templated field that get's passed to index.html template
  res.render( 'index', { tweets: tweetsWithUserName } ); // { obj: {obj}, {obj}, {obj} } // every {obj} value gets passed to template
});

router.get('/tweets/:id', function(req, res) {
  var userId = parseInt(req.params.id);
  var tweetsWithId = tweetBank.find({id: userId});
  res.render( 'index', { tweets: tweetsWithId } );
})

router.get('/', function (req, res, next) {
  let tweets = tweetBank.list();
  console.log("all", tweets);
  res.render( 'index', { tweets: tweets });
});

router.get('/stylesheets/style.css', function (req, res) {
  res.sendFile('/stylesheets/style.css');
});

module.exports = router;

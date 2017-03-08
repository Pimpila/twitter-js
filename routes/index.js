const express = require('express');
const router = express.Router();

// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');
router.use(express.static('public'))

// set the more specific .get cases first
// for single-user page:
router.get('/users/:name', function (req, res) {
  var userName = req.params.name;
  var tweetsWithUserName = tweetBank.find({name: userName}); // returns a filter obj
  console.log(tweetsWithUserName)
  // ?? tweetsWithUserName is an array of objs that gets looped over in nunjuck template ({% for tweet in tweets %})
  res.render( 'index', { tweets: tweetsWithUserName, showForm: true} );
});

// for single-tweet page:
router.get('/tweets/:id', function(req, res) {
  var userId = parseInt(req.params.id);
  var tweetsWithId = tweetBank.find({id: userId});
  res.render( 'index', { tweets: tweetsWithId } );
})

// to view all tweets:
router.get('/', function (req, res, next) {
  let allTweets = tweetBank.list();
  res.render( 'index', { tweets: allTweets, showForm: true });
});

// to add a tweet:
router.post('/tweets', function (req, res){
  // ?? name logging undefined
  var name = req.body.name; // corresponds to <input name="name"...> in form
  var text = req.body.text; // corresponds to <input name="text"...> in form
  console.log('name', name, 'text', text);
  tweetBank.add(name, text);
  res.redirect('/');
});

// to serve the style.css file:
router.get('/stylesheets/style.css', function (req, res) {
  res.sendFile('/stylesheets/style.css');
});

module.exports = router;

var express = require('express');
var app = express();


app.use(function(req, res, next) {
  // log method and path props on req obj
  // log statusCode prop on res obj
  console.log(req.method, req.path, res.statusCode);
  next();
});

// this logs anytime a client request begins with /special (can't be in middle of route)
app.use('/special', function(req, res, next){
  console.log('you have reached a special area')
})

app.get('/', function (req, res, next) {
  res.send('welcome!')
})

app.get('/news', function (req, res, next) {
  res.send('welcome to news')
})




app.listen(3000, function(){
  console.log('server listening')
})

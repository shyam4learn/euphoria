var express = require('express');

var app = express();

//var port = 5000;

app.use(express.static('public'));
app.use(express.static('src/views'));


app.get('/', function(req, res){
  res.send('Hello!')
});

app.get('/books', function(req, res){
  res.send('Books!')
});

//app.set('port', process.env.PORT || 5000);
app.listen(process.env.PORT, function(err){
  console.log('Running server on:' + process.env.PORT);
});

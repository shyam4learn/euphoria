var express = require('express');

var app = express();

var port = process.env.PORT || 5000;

app.use(express.static('public'));
app.use(express.static('src/views'));


app.get('/', function(req, res){
  // res.send('Hello!');
});

// app.get('/schedule', function(req, res){
//   res.send('Books!');
// });

app.listen(port || 5000, function(err){
  console.log('Running server on:' + port);
});

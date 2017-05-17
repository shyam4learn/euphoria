require('dotenv/config');

var MongoClient = require('mongodb').MongoClient;

// var url = 'mongodb://shyamvadeyar:Nokia-6233@cluster0-shard-00-00-2l6iq.mongodb.net:27017,cluster0-shard-00-01-2l6iq.mongodb.net:27017,cluster0-shard-00-02-2l6iq.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin';
var url = process.env.MONGO_URL;
var coll_name = process.env.MONGO_COLLECTION;

MongoClient.connect(url, function(err, db){
  console.log("Connected");

  var collection = db.collection(coll_name);
  var query = {"against":"riverside"};

  collection.find().toArray(function(err, items) {
    console.log(items);
  });

  db.close();
});

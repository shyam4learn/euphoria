var MongoClient = require('mongodb').MongoClient;

var url = 'mongo "mongodb://cluster0-shard-00-00-2l6iq.mongodb.net:27017,cluster0-shard-00-01-2l6iq.mongodb.net:27017,cluster0-shard-00-02-2l6iq.mongodb.net:27017/test?replicaSet=Cluster0-shard-0" --authenticationDatabase admin --ssl --username shyamvadeyar --password Nokia-6233';

MongoClient.connect(url, function(err, db){
  console.log("Connected");
  db.close();
});

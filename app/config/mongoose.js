/**
 * Created by bagjaemin on 2017. 10. 7..
 */
'use strict'
var mongoose = require('mongoose');
var db = mongoose.connection;
var url = "mongodb://localhost:27017/mydb";
var config = require("./config");
var path = require("path");
db.on('error', console.error);
db.once('open', function(){
	// CONNECTED TO MONGODB SERVER
	console.log("Connected to mongod server");
});

mongoose.connect(url);


module.exports = mongoose;



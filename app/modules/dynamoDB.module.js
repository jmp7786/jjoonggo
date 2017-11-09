/**
 * Created by bagjaemin on 2017. 10. 31..
 */
'use strict'
let dynamoDB = require("../config/dynamoDB");
let config = require("../config/config");
let path = require("path");

var models = {}
// console.log(dynamoDB);
config.getGlobbedFiles("../models/*").forEach(function(v,i,a){
	// console.log(path.parse(v).name);
	let moduleName = path.parse(v).name;
	models[moduleName] = dynamoDB.define(moduleName,require(v)[moduleName])
	var tmp = require(v)[moduleName]
	// console.log(tmp);
	// models[moduleName].get("jmp", function (r) {
	// 	console.log(r);
	// } )

	

})

// models.article.create({
// 	count:11, title: 'jmp', writer : "jmp", body:"asdf",analyzed:false
// }, function (err, acc) {
// 	console.log(err);
// 	console.log('created account in DynamoDB', acc.get('title'));
// 	console.log(acc);
// })

// var tmp = obj.Articles.scan().loadAll().exec();


// Account.create({email: 'foo@example.com', name: 'Foo Bar', age: 21}, function (err, acc) {
// 	console.log('created account in DynamoDB', acc.get('email'));
// });



module.exports = models;
// dynamoDB.createTables( function (r,data) {
// 	console.log(r);
// 	console.log(data);
// } )




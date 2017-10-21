/**
 * Created by bagjaemin on 2017. 10. 7..
 */
'use strict'

var config = require("./config");
var path = require("path");

var db = {};
config.getGlobbedFiles(path.resolve(config.root,'./models/*.js')).forEach(function(modelPath) {
	console.log(path.resolve(modelPath));
	var model = require(path.resolve(modelPath));
	db[model._modelName] = model;
});

module.exports = db;
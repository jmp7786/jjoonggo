'use strict'
var mongoose = require("../config/mongoose")
var Schema = mongoose.Schema;

var articleSchema = new Schema({
	article_count: Number,
	article_title: String,
	article_writer: String,
	article_body : String,
	analyzed: { type: Boolean, default: false }
});

var modelName = "Article";
// var Article = mongoose.model('Article', articleSchema);
var Article = mongoose.model(modelName, articleSchema);
Article._modelName = modelName;

module.exports = Article;
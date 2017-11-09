'use strict'
let joi = require("joi")

module.exports = {
	article: {
		hashKey: "title",
		rangeKey: "count",
		timestamps: true,
		schema: {
			count: joi.number(),
			title: joi.string(),
			writer: joi.string(),
			body: joi.string(),
			analyzed: joi.boolean().default(false)
		}
	}
}

// var mongoose = require("../config/mongoose")
// var Schema = mongoose.Schema;

// var articleSchema = new Schema({
// 	article_count: Number,
// 	article_title: String,
// 	article_writer: String,
// 	article_body : String,
// 	analyzed: { type: Boolean, default: false }
// });


// var Article = {
// 	TableName : table,
// 	Item: {
// 		"year" : year
// 	}
// }


// var Account = dynamodb.define('Account', {
// 	hashKey : 'email',
// 	rangeKey : 'title',
// 	// add the timestamp attributes (updatedAt, createdAt)
// 	timestamps : true,
//
// 	schema : {
// 		email   : joi.string().email(),
// 		name    : joi.string(),
// 		age     : joi.number(),
// 		roles   : dynamodb.types.stringSet(),
// 		settings : {
// 			nickname      : joi.string(),
// 			acceptedTerms : joi.boolean().default(false)
// 		}
// 	}
// });
//
// var BlogPost = dynamodb.define('BlogPost', {
// 	hashKey : 'email',
// 	rangeKey : 'title',
// 	timestamps : true,
// 	schema : {
// 		email   : joi.string().email(),
// 		title   : joi.string(),
// 		content : joi.binary(),
// 		tags   : dynamodb.types.stringSet(),
// 	}
// });


// module.export = {
// 	hashKey : "title",
// 	rangeKey : "count",
// 	timestamps : true,
// 	schema : {
// 		count : joi.number(),
// 		title :  joi.string(),
// 		writer : joi.string(),
// 		body : joi.string(),
// 		analyzed : joi.boolean().default(false)
// 	}
// }
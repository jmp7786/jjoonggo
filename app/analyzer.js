/**
 * Created by bagjaemin on 2017. 10. 7..
 */
'use strict'
var db = require("./config/mongooseDb");
var Article = db.Article;
var articleCtl = require("./controller/article.controller");
var analyzerCtl = require("./controller/analyzer.controller");
var crawlerCtl = require("./controller/crawler.controller");

// analyzerCtl.getUnanalyzedData().then(function (e) {
// 	console.log(e.Article);
// })
console.log("crawlerCtl.checkArticleList()",crawlerCtl.checkArticleList());

//
// crawlerCtl.insertArticles();
	// console.log(e);
// } )crawlerCtl.checkArticleList().then( function (e) {
// 	console.log(e);
// } )
var request = require("request");
var cheerio = require("cheerio");
var Iconv = require('iconv').Iconv;
var iconv = new Iconv('euc-kr', 'utf-8//translit//ignore');
// var MongoClient = require('mongodb').MongoClient;
var MongoUrl = "mongodb://localhost:27017/mydb";
var WatchArticleUrl = "cafe.naver.com/ArticleRead.nhn?clubid=10050146&page=1&menuid=1011&boardtype=L&articleid=???&referrerAllArticles=false"

var mongoose = require('mongoose');
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
	// CONNECTED TO MONGODB SERVER
	console.log("Connected to mongod server");
});

mongoose.connect(MongoUrl);

var Schema = mongoose.Schema;

var articleSchema = new Schema({
	article_count: Number,
	article_title: String,
	article_writer: String,
	article_body : String
});

var Article = mongoose.model('Article', articleSchema);
// module.exports = mongoose.model('Article', articleSchema);




var options = {
	//[명품]시계 카테고리
	url: "http://cafe.naver.com/ArticleList.nhn?search.clubid=10050146&search.menuid=1011&search.boardtype=L&search.clubid=10050146",
	encoding: null
};
var watchArticleOptions = {
	//[명품]시계 카테고리
	url: "http://cafe.naver.com/ArticleRead.nhn?clubid=10050146&page=1&menuid=1011&boardtype=L&articleid=???&referrerAllArticles=false",
	encoding: null
};

function insertArticles(){
	(function() {
		return new Promise(function(resolve, reject) {




			getLastArticle().then(function (r) {
				console.log("1");
				console.log("1");
				var lastArticleCount = r[0].article_count || 0;

				request.get(options, function (error, response, body) {
					var data = iconv.convert(body).toString();
					// console.log(data);
					var $ = cheerio.load(data);


					// var postElements = $("#main-area > div:nth-child(8) > form > table > tbody > tr:nth-child(3) > td.board-list")
					// var list_count = $("#main-area tr span.list-count")
					// var article_title = $("#main-area tr span.aaa")
					// var main_list = $("#main-area tr span");
					// var main_list = $("#main-area tbody tr[align='center']");
					var main_list = $("form[name=ArticleList] tr[align=\"center\"]");
					var list_count = $("#main-area tr span")
					var article_title = $("#main-area tr span")
					var count = 0;
					var articleArr = [];
					main_list.each(function () {
						var article_count = $(this).find("span.list-count").text();
						var article_title = $(this).find("span.aaa").text();
						var article_writer = $(this).find("span.wordbreak").text();
						article_count = article_count.replace(/(\s*)/g, "");
						article_title = article_title.replace(/(^\s*)|(\s*$)/g, "");
						article_writer = article_writer.replace(/(^\s*)|(\s*$)/g, "");
						// console.log("article_count :",article_count,"article_title :",article_title,"article_writer : ",article_writer);

						if(lastArticleCount < article_count){
							var article = {
								article_count: article_count,
								article_title: article_title,
								article_writer: article_writer
							};
							articleArr.push(article);
						}

					});
					resolve(articleArr);
				})
			} )

		}).catch(function(e){
			console.error(e);
		}) ;

	})().then(function (r) {


		console.log("#2");
		console.log(r.length);
		// console.log(r);
		var count = 0;
		_watchArticleOptions =   watchArticleOptions;
		var tmpArr = [];
		r.forEach(function (article,i,arr) {

			var _watchArticleOptions = watchArticleOptions
			var _option = {
				url :watchArticleOptions.url.replace("???",article.article_count),
				encoding: null
			}


			request.get(_option, function (error, response, body) {

				var data = iconv.convert(body).toString();
				var $ = cheerio.load(data);
				var tmp = $(this).find(".details-m").text();
				// console.log(count++);
				// console.log(tmp);
				console.log(_option);
				// console.log(data);
				// console.log(data);
				var _article = new Article({
					article_count: article.article_count,
					article_title: article.article_title,
					article_writer: article.article_writer,
					article_body : data
				});

				// article.article_body = data;

				_article.save(function(err, r){
					if(err)  console.error(err);
					console.log(r);
				})
			})

		} )

	} )
}



function getLastArticle (){
	return Article.find().sort({article_count:-1}).limit(1)
}
function checkArticleList (){
	Article.find(function (e,r) {
		if(e) throw new Error()
		console.log(r);
	} )
}

module.exports = {
	insertArticles: insertArticles,
	checkArticleList : checkArticleList
}




'use strict'
var request = require("request");
var cheerio = require("cheerio");
var Iconv = require('iconv').Iconv;
var iconv = new Iconv('euc-kr', 'utf-8//translit//ignore');
var Promise = require('bluebird');
var RegsModule = require("../modules/regExgs.module");

// var MongoClient = require('mongodb').MongoClient;
var WatchArticleUrl = "cafe.naver.com/ArticleRead.nhn?clubid=10050146&page=1&menuid=1011&boardtype=L&articleid=???&referrerAllArticles=false"
var db = require("../modules/dynamoDB.module");
// var Article = db.Article;

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
				// console.log(r[0]);
				console.log(r[0].get("count"));
				var lastArticleCount = r[0] && r[0].get("count") || 1;
				console.log(lastArticleCount);

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
		var _watchArticleOptions =   watchArticleOptions;
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

				var _article = new db.article({
					count: article.article_count,
					title: article.article_title,
					writer: article.article_writer,
					body : data
				});

				// article.article_body = data;

				_article.save(function(err, r){
					if(err)  {
						console.error(err);
					}
					else {
						console.log(r);
					}

				})
			})

		} )

	} )
}



function getLastArticle (){
	// var params = {
	// 	TableName: table,
	// 	Key:{
	// 		"year": year,
	// 		"title": title
	// 	}
	// };

	// var x = db.article.get({Key:{title:"jmp",count:"11"}}, function (r) {
	// 	console.log(r);
	// } );

	return new Promise(function(resolve, reject) {


		db.article.scan()
			.loadAll()
			.limit(1)
			.exec(function (e,r) {
				// console.log(e);
				// console.log(r);
				if(e) {
					reject(e)
				} else {
					resolve(r.Items);
				}
			} );
	}).catch(function(e){
		console.error(e);
	}) ;






	// db.article.get = Promise.promisify(db.article.get)
	// var tmp =   db.article.get({title:"jmp"}).then( function (r) {
	// 	console.log(r);
	// } )
	// console.log(tmp);

	// return Article.find().sort({article_count:-1}).limit(1)
}

function checkArticleList (){
	Article.find(function (e,r) {
		if(e) throw new Error()
		console.log(r);
		console.log(r.length);
	} )
}

function removeAll () {
	Article.remove({});
}

function remove (option) {
	Article.remove({option});
}

module.exports = {
	insertArticles: insertArticles,
	checkArticleList : checkArticleList,
	remove :remove,
	removeAll :removeAll,
}

var fs = require("fs")
var tmp = fs.readFileSync('../../htmlSource.txt',"utf-8");

// console.log(tmp);

// var tmp2 = RegsModule.removeHtml(tmp)
// console.log(tmp2);

// getLastArticle();
// insertArticles();
getLastArticle().then( function (r) {
	console.log(r);
} )
// insertArticles();

//http 서버 요청
//가져온 데이터를 사용할 수 있도록 변환
//변환된 데이터를 css 셀렉터를 통해서 돔객체의 필요한 정보를 가져옴
//가져온 정보를 배열에 담아서 호출한 상위 함수에 반환해 줌



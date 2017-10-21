/**
 * Created by bagjaemin on 2017. 10. 9..
 */
'use strict'
var Article = require("../config/mongooseDb").Article;
console.log(require("../config/mongooseDb"));
module.exports = {
	getUnanalyzedData : function () {
		return Article.find({analyzed:false,}).sort({"_id" : -1 }).limit(10);
	}
}

module.exports.getUnanalyzedData();
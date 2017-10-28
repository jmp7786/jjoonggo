/**
 * Created by bagjaemin on 2017. 10. 23..
 */
function removeHtml( html ) {
	return html.replace(/(<([^>]+)>)/gi, "");
}

module.exports = {
	removeHtml:removeHtml
}
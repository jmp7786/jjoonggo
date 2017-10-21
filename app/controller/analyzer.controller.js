'use strict'
var Promise = require('bluebird');
var mecab = require('mecab-ffi');

module.exports = {
	extractNounMap : Promise.promisify(mecab.extractNounMap),
	parseSync : Promise.promisify(mecab.parseSync),
	extractSortedNounCounts : Promise.promisify(mecab.extractSortedNounCounts)
}
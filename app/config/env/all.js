'use strict';

var path = require('path'),
	rootPath = path.normalize(__dirname + '/../..');

module.exports = {
	root: rootPath,
	port: process.env.PORT || 3000,
	modelsDir: rootPath + '/app/models',
	templateEngine: 'swig',
	sessionSecret: 'GoD BleSs TreEcOo',
	aesSecret: 'ShoW Me ThE MoNeY',
	md5Secret: 'PoWeR OveRWhElMInG',
	sessionIssuer: 'api.treecoo.com',
	sessionAudience: 'api.treecoo.com',
	timezone:"+09:00",
	questions:{
		limit:10
	},
	playStore: {
		url: 'market://details?id=treecoo.treecoo.com',

	},
	ios: {
		url: 'market://details?id=treecoo.treecoo.com',

	},
	sms: {
		endPoint: 'http://api.openapi.io/ppurio/1/message/',
		sendPhone: '',
		clientKey: 'NDY2Ny0xNDY2MDY4MjI5NDg0LTI4NGY1NTc5LWJkMmEtNDU1OS04ZjU1LTc5YmQyYTI1NTk',
		cliendId: 'treecoo'
	},
	aws:{
		
	}
};

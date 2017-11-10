'use strict';

var moment = require('moment');
module.exports = {
	db: {
		mysql:{
			dialect:"mysql",
			// resa.ctizpg9ohnsp.ap-northeast-2.rds.amazonaws.com
			host: 'resa.ctizpg9ohnsp.ap-northeast-2.rds.amazonaws.com',
			name: 'trc_test',
			username: 'trc',
			password: 'Trc123(())'
		}
	},
	endPoint: 'resa.ctizpg9ohnsp.ap-northeast-2.rds.amazonaws.com:3306',
	webUrl: 'http://www.treecoo.com',
	rollbar: {
		access_key: '9baff7b1df0240818dac42308b42c6d9',
		env: 'development'
	},
	aws: {
		accessKeyId: '',
		// secretAccessKey: 'SfJPyzV8hDwPx4hcRl/W5VRiKd4Vc5rCPHaBcJi9',
		secretAccessKey: process.env.TREECOO_AWS_SecretAccessKey,
		region: 'ap-northeast-2',
		push: {
			android_arn: '',
			ios_arn: ''
		},
		ses: {
			sender: 'foodtruck@treecoo.com',
			region: 'us-east-1'
		},
		// profile : "jjonggo",
		profile : "jjonggo_read_only",
		endpoint: "https://dynamodb.ap-northeast-2.amazonaws.com"

	},
	iamport: {
		endPoint: 'https://api.iamport.kr',
		apiKey: "9770367161489001",
		secretKey: "",
		merchantId: "imp14341392"
	},
	facebook: {
		clientID: process.env.FACEBOOK_ID || 'APP_ID',
		clientSecret: process.env.FACEBOOK_SECRET || 'APP_SECRET',
		callbackURL: '/auth/facebook/callback'
	},
	twitter: {
		clientID: process.env.TWITTER_KEY || 'CONSUMER_KEY',
		clientSecret: process.env.TWITTER_SECRET || 'CONSUMER_SECRET',
		callbackURL: '/auth/twitter/callback'
	},
	google: {
		clientID: process.env.GOOGLE_ID || 'APP_ID',
		clientSecret: process.env.GOOGLE_SECRET || 'APP_SECRET',
		callbackURL: '/auth/google/callback'
	},
	linkedin: {
		clientID: process.env.LINKEDIN_ID || 'APP_ID',
		clientSecret: process.env.LINKEDIN_SECRET || 'APP_SECRET',
		callbackURL: '/auth/linkedin/callback'
	},
	github: {
		clientID: process.env.GITHUB_ID || 'APP_ID',
		clientSecret: process.env.GITHUB_SECRET || 'APP_SECRET',
		callbackURL: '/auth/github/callback'
	},
	mailer: {
		from: process.env.MAILER_FROM || 'EMAIL',
		options: {
			service: process.env.MAILER_SERVICE_PROVIDER || '',
			auth: {
				user: process.env.MAILER_EMAIL_ID || '',
				pass: process.env.MAILER_PASSWORD || ''
			}
		}
	}
};

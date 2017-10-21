'use strict';

module.exports = {
	db: {
		host: '',
		name: 'treecoo',
		username: 'treecoo',
		password: '!1gogofood'
	},
	endPoint: 'https://api.treecoo.com',
	webUrl: 'http://www.treecoo.com',
	rollbar: {
		access_key: 'b9fde7cfbabd44ac8524acde6527ed5d',
		env: 'production'
	},
	aws: {
		accessKeyId: 'AKIAJK5UQBWPDZ3DKZZQ',
		secretAccessKey: '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',
		region: 'ap-northeast-1',
		push: {
			android_arn: 'arn:aws:sns:ap-northeast-1:826643037926:app/GCM/treecoo-android',
			ios_arn: ''
		},
		ses: {
			sender: 'foodtruck@treecoo.com',
			region: 'us-east-1'
		}
	},
	iamport: {
		endPoint: 'https://api.iamport.kr',
		apiKey: "9770367161489001",
		secretKey: "Zrt50g1XZN1npNx6VXYS231cxlGIHDZG4tL4JN1IA360QD6MA5FD8GQG1wpJ9oqeScjBZkkAoqBf3H1E",
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
		from: process.env.MAILER_FROM || 'MAILER_FROM',
		options: {
			service: process.env.MAILER_SERVICE_PROVIDER || 'MAILER_SERVICE_PROVIDER',
			auth: {
				user: process.env.MAILER_EMAIL_ID || 'MAILER_EMAIL_ID',
				pass: process.env.MAILER_PASSWORD || 'MAILER_PASSWORD'
			}
		}
	}
};

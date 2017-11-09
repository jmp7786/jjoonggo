/**
 * Created by bagjaemin on 2017. 10. 30..
 */
"use strict"
var AWS = require("aws-sdk");
var config = require("./config");
var credentials = new AWS.SharedIniFileCredentials({profile: config.aws.profile});
AWS.config.credentials = credentials;

/**
 * Update AWS Configuration
 */

AWS.config.region = config.aws.region;
AWS.config.endpoint = config.aws.endpoint;


module.exports = AWS;
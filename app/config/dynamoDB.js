
var dynamoDB = require("dynamoDB");
var AWS = require("aws-sdk");
var config = require("./config");
dynamoDB.AWS.config.credentials = new AWS.SharedIniFileCredentials({profile: config.aws.profile});
dynamoDB.AWS.config.region = config.aws.region;
dynamoDB.AWS.config.endpoint = config.aws.endpoint;
module.exports = dynamoDB;
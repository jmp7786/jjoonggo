var AWS = require("aws-sdk");
var credentials = new AWS.SharedIniFileCredentials({profile: 'jjonggo'});
AWS.config.credentials = credentials;

AWS.config.update({
	region: "ap-northeast-2",
	// endpoint: "http://localhost:8000"
	// endpoint: "https://dynamodb.us-west-2.amazonaws.com"
	endpoint: "https://dynamodb.ap-northeast-2.amazonaws.com"
});

var dynamodb = new AWS.DynamoDB();

var params = {
	TableName : "Movies",
	KeySchema: [
		{ AttributeName: "year", KeyType: "HASH"},  //Partition key
		{ AttributeName: "title", KeyType: "RANGE" }  //Sort key
	],
	AttributeDefinitions: [
		{ AttributeName: "year", AttributeType: "N" },
		{ AttributeName: "title", AttributeType: "S" }
	],
	ProvisionedThroughput: {
		ReadCapacityUnits: 10,
		WriteCapacityUnits: 10
	}
};

dynamodb.createTable(params, function(err, data) {
	if (err) {
		console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
	} else {
		console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
	}
});
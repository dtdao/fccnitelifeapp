var express = require("express");
var router = express.Router();
var request = require("request");

var sendJsonResponse = function(res, status, content){
	res.status(status);
	res.json(content);
}

module.exports.search = function(req, res){
	sendJsonResponse(res, 200, {"message": "success"});
}
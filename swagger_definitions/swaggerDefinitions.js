"use strict";

/*
 * swagger-jsdoc : To create Swagger doc
 * To view Swagger doc
 */
var swaggerJSDoc = require("swagger-jsdoc"); 
var swaggerUI = require("swagger-ui-express"); 

var swaggerDefinition = {
	info: {
		title: "Pet Care",
		description: "This is Pet Care API documentation",
		version: "1.0.0"
		 // Semantic Version (semver) [Major(No backwardcompatibility)].[Major(Backward compatibility)].[bug fix]
		},
	securityDefinitions: {
		bearerAuth: {
			type: "apiKey",
			name: "authorization",
			in: "header",
			scheme: "bearer"
		}
	},
	host: "localhost:3023",
	basePath: "/"
};

var swaggerOptions = {
	swaggerDefinition,
	apis:["./end_points/**/*.js"]
};

var swaggerSpecs = swaggerJSDoc(swaggerOptions);

module.exports = {
    swaggerSpecs: swaggerSpecs,
    swaggerUI: swaggerUI
};
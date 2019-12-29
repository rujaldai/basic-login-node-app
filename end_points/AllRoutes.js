module.exports = ( function() {
    'use strict';
    var routes = require("express").Router();
    var userEndPoints = require("./User/UserEndpoints.js");

    routes.use("/user", userEndPoints);

    return routes;
})();
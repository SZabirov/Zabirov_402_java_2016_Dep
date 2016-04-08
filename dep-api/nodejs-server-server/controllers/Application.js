'use strict';

var url = require('url');


var Application = require('./ApplicationService');


module.exports.applicationGET = function applicationGET (req, res, next) {
  Application.applicationGET(req.swagger.params, res, next);
};

module.exports.applicationIdGET = function applicationIdGET (req, res, next) {
  Application.applicationIdGET(req.swagger.params, res, next);
};

module.exports.applicationPOST = function applicationPOST (req, res, next) {
  Application.applicationPOST(req.swagger.params, res, next);
};

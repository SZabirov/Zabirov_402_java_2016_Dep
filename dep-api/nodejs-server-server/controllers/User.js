'use strict';

var url = require('url');


var User = require('./UserService');


module.exports.userLoginPOST = function userLoginPOST (req, res, next) {
  User.userLoginPOST(req.swagger.params, res, next);
};

module.exports.userPOST = function userPOST (req, res, next) {
  User.userPOST(req.swagger.params, res, next);
};

module.exports.userProfilePOST = function userProfilePOST (req, res, next) {
  User.userProfilePOST(req.swagger.params, res, next);
};

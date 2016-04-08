'use strict';

exports.userLoginPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * username (String)
  * password (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "token" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.userPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * username (String)
  * password (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "passportNumber" : "aeiou",
  "resolutionNumber" : "aeiou",
  "licenseSeries" : "aeiou",
  "licenceGivenDate" : "aeiou",
  "resolutionWasGivenBy" : "aeiou",
  "resolutionGivenDate" : "aeiou",
  "licenceNumber" : "aeiou",
  "registrationAddress" : "aeiou",
  "type" : "aeiou",
  "passportSeries" : "aeiou",
  "token" : "aeiou",
  "currentAddress" : "aeiou",
  "birthPlace" : "aeiou",
  "licenseType" : "aeiou",
  "personalOrNot" : "aeiou",
  "phoneNumber" : "aeiou",
  "surname" : "aeiou",
  "name" : "aeiou",
  "mvdOfficeName" : "aeiou",
  "middleName" : "aeiou",
  "model" : "aeiou",
  "uniqueNumber" : "aeiou",
  "resolutionSeries" : "aeiou",
  "email" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.userProfilePOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * profile (User)
  * token (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "passportNumber" : "aeiou",
  "resolutionNumber" : "aeiou",
  "licenseSeries" : "aeiou",
  "licenceGivenDate" : "aeiou",
  "resolutionWasGivenBy" : "aeiou",
  "resolutionGivenDate" : "aeiou",
  "licenceNumber" : "aeiou",
  "registrationAddress" : "aeiou",
  "type" : "aeiou",
  "passportSeries" : "aeiou",
  "token" : "aeiou",
  "currentAddress" : "aeiou",
  "birthPlace" : "aeiou",
  "licenseType" : "aeiou",
  "personalOrNot" : "aeiou",
  "phoneNumber" : "aeiou",
  "surname" : "aeiou",
  "name" : "aeiou",
  "mvdOfficeName" : "aeiou",
  "middleName" : "aeiou",
  "model" : "aeiou",
  "uniqueNumber" : "aeiou",
  "resolutionSeries" : "aeiou",
  "email" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}


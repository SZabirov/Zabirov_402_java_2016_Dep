'use strict';

exports.applicationGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * token (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = "";
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.applicationIdGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * token (String)
  * id (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "date" : "aeiou",
  "mvdOfficeHead" : "aeiou",
  "weaponCount" : "aeiou",
  "weaponCaliber" : "aeiou",
  "weaponType" : "aeiou",
  "weaponModel" : "aeiou",
  "weaponStoragePlace" : "aeiou",
  "id" : "aeiou",
  "weaponPurchasePurpose" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.applicationPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * application (NewApplication)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "date" : "aeiou",
  "mvdOfficeHead" : "aeiou",
  "weaponCount" : "aeiou",
  "weaponCaliber" : "aeiou",
  "weaponType" : "aeiou",
  "weaponModel" : "aeiou",
  "weaponStoragePlace" : "aeiou",
  "id" : "aeiou",
  "weaponPurchasePurpose" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}


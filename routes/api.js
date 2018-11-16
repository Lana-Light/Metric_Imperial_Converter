/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();
 
  app.route('/api/convert')
    .get(function (req, res){
      var input = req.query.input;
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);
      var result;
    if(initNum=='invalid number') {
     initUnit=='invalid unit'? result='invalid number and unit': result='invalid number';
      res.type('text').end(result); 
    } else if(initUnit=='invalid unit') {
     result='invalid unit';
      res.type('text').end(result); 
    } else {
      var returnNum = convertHandler.convert(initNum, initUnit);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
     result = {initNum, initUnit, returnNum, returnUnit, string: toString};
     //res.json
     res.json(result);
    }  
  });
    
};

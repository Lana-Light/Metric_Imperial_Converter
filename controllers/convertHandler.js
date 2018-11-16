/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result;
     if(input===undefined) {
    result = 'invalid number';  
    } else {
    var exp = /^(gal|l|mi|km|lbs|kg)$/i;
    var san = /^\d+(\.\d+)?(\/\d+(\.\d+)?)?/; 
    var repl = input.replace(san, '');
     if(input.match(san)&&repl.match(/^[a-z]/i)) {
    result=input.match(san)[0]; 
    var res = result.split('/');    
    res.length==2? result = res[0]/res[1]: result = +res[0];    
         } else {
    input.match(exp)? result = 1: result = 'invalid number';     
         }
    }
    
    return result;
  };
  
  this.getUnit = function(input) {
    var result;
     if(input===undefined) {
    result = 'invalid unit';
    } else {
    var exp = /^(gal|l|mi|km|lbs|kg)$/i;
    var repl = input.replace(/^[0-9\/\.]+/, '');
     if(repl.match(exp)) {
    result = repl.match(exp)[0];
   if(result=='l') {
    result = result.replace('l', 'L');
   }     
      } else {
    result = 'invalid unit';   
      }
    }
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    initUnit = initUnit.toLowerCase();
    var units = [ ['gal','l','mi','km','lbs','kg'],
     ['L','gal','km','mi','kg','lbs'] ];
    var index = units[0].indexOf(initUnit);
    var result = units[1][index];
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    unit = unit.toLowerCase();
    var units = [ ['gal','l','mi','km','lbs','kg'], 
                 ['gallons','liters','miles','kilometers','pounds','kilograms'] ];
    var index = units[0].indexOf(unit);
    var result = units[1][index];
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    initUnit = initUnit.toLowerCase();
    var result;
    switch(initUnit) {
      case 'gal': result = initNum*galToL; break;
      case 'l': result = initNum/galToL; break;
      case 'lbs': result = initNum*lbsToKg; break;
      case 'kg': result = initNum/lbsToKg; break;
      case 'mi': result = initNum*miToKm; break;
      case 'km': result = initNum/miToKm; break;  
    }
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result = `${+initNum.toFixed(5)} ${this.spellOutUnit(initUnit)} \
converts to ${+returnNum.toFixed(5)} ${this.spellOutUnit(returnUnit)}`;
    
    return result;
  };
  
}

module.exports = ConvertHandler;

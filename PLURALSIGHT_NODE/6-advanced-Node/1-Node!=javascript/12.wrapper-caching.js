console.log(arguments);
let exports = module.exports;
exports.id = 1; //this is ok
exports = {id:1}; //this is not ok

module.exports = {id:1} //this is ok

//why?

var g = 42; //local to this file

//require('module').wrapper

require = function(){
  return {mocked:true};
};

const fs =require('fs');
console.log(fs);



/*
cinst printStars = require('./printStars');
printstars(10,'Hi!');
*/



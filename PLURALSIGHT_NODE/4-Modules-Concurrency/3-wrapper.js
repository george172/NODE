//console.log(arguments);

//Internally(hidden wrapper function)

//function wrapper(exports,module,require,__filename,__dirname){
  //let g = 1; //will not be a global varaible at all since it 
  //local variable inside the function
  //console.log(arguments);
  exports.a = 42 //alaise to module.exports
  module.exports.b = 37
  //exports = () => {}//not Ok
  //module.exports = () => {}; //ok
  //return module.exports; //node will always return
//} (module.exports,)


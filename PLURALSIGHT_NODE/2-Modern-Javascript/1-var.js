{
  //Block Scope
}

if(true){
  //Block Scope
};

for(var i = 1;i<=10;i++){
  //Block Scope
}

/*
the variable value does not leakes outside of the scope in function scope
In block Scope it is leaked outside of the Scope
if a let is used it will become block scope
*/
function sum(a,b){
  //FunctionScope
  var result = a+b;
  return result;
}

let value = sum(4,3);
console.log(value);
//console.log(result);
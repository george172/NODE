//require
//Resolving=> absolute file path of the modules
//Loading=>Content of the file at the absolute path
//wrapping => give a private scope
//Evaluting
//Caching

//console.log(module);
console.log('In ./index.js')
require('find-me');
//require.resolve('find-me');

/*
modules does not need to be a file
./node_modules/find-me/start.js //can you control on package.json main
*/

/*
package.json
{
  "name":"find-me",
  "main":"start.js"
}
*/

//./ ==> relative path
// /=> absolute path

//Circular module dependency
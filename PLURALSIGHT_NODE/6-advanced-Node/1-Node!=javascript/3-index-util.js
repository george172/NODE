// let answer = require('./2-util');


// console.log(answer);
// //console.log(global);

// //Node process object provides a bridge between the node 
// //application and the running environment

// //node -p process | less
// //node -p "process.versions"
// //node -p "process.versions.v8"

// /* Example
// if(process.versions.b8 < '4'){
//   //Do something for old b8
// }
// */

// //node -p "process.env" | less

// process.env.USER = 'ryan'// does not modify ENV.USER

// //instead of index.js
// process.env.PORT;

// // The rigth way
// //util.js
// export const config = {
//   port:process.env.PORT || 8080
// }

// //index.js
// const {config} = require('./util');
// config.port;

// //node -p "process.release.lts"

// //Buffer=> with work with binary steams of data
// //Buffer.alloc(8)
// //Buffer.allocUnsafe(8)
// //Buffer.allocUnsafe(8).fill();
// //Buffer.allocUnsafe(8).toString();

const string = 'touche';
const buffer = Buffer.from('touche');

console.log(string,string.length);
console.log(buffer,buffer.length);


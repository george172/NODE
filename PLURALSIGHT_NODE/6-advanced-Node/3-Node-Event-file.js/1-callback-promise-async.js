const fs = require('fs');
const util = require('util');

/***************************Callback*************************** */
// //callback
// const readFileAsArray = function(file,cb){
//   fs.readFile(file,function(err,data){
//     if(err){return cb(err)
//     } else {
//       const lines = data.toString().trim().split('\n');
//       cb(null,lines);
//     }
//   })
// }

// //Example call callback
// readFileAsArray('./numbers.js',(err,lines) => {
//   if(err) throw err;

//   const numbers = lines.map(Number);
//   const oddNumber = numbers.filter(number => number % 2 ===1);
//   console.log('add numbers count:',oddNumber.length);
// });

/*************************Promises***************************** */

// const readFileAsArray = (file) => {
//   return new Promise((resolve,reject) => {
//     fs.readFile(file,(err,data) => {
//       if(err){
//         return reject(err)
//       }
//       const lines = data.toString().trim().split('\n');
//       resolve(lines);
//     })
//   })
// }

// readFileAsArray('./numbers.js')
//   .then(lines => {
//     const numbers = lines.map(Number);
//     const oddNumber = numbers.filter(number => number % 2 ===1);
//     console.log('add numbers count:',oddNumber.length);
//   })
//   .catch(console.error);

  /*********************Promises and callback together */

//   const readFileAsArray = (file,cb = () => {}) => {
//     return new Promise((resolve,reject) => {
//       fs.readFile(file,(err,data) => {
//         if(err){
//           reject(err)
//           return cb(err);
//         }
//         const lines = data.toString().trim().split('\n');
//         resolve(lines);
//         cb(null,lines);
//       })
//     })
//   }
  
//   readFileAsArray('./numbers.js')
//     .then(lines => {
//       const numbers = lines.map(Number);
//       const oddNumber = numbers.filter(number => number % 2 ===1);
//       console.log('add numbers count:',oddNumber.length);
//     })
//     .catch(console.error);

// readFileAsArray('./numbers.js',(err,lines) => {
//   if(err) throw err;
//   const numbers = lines.map(Number);
//   const oddNumber = numbers.filter(number => number % 2 ===1);
//   console.log('add numbers count:',oddNumber.length);
// });

/****************************async await**************************************** */

  const readFileAsArray = (file,cb = () => {}) => {
    return new Promise((resolve,reject) => {
      fs.readFile(file,(err,data) => {
        if(err){
          reject(err)
          return cb(err);
        }
        const lines = data.toString().trim().split('\n');
        resolve(lines);
        cb(null,lines);
      })
    })
  }

async function countOdd () {
  try{
    const lines = await readFileAsArray('./numbers.js');
    const numbers = lines.map(Number);
    const oddNumber = numbers.filter(number => number % 2 ===1);
    console.log('add numbers count:',oddNumber.length);
  } catch(err){
    console.log(err);
  }
};

countOdd()
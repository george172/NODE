const path = require('path');
const fs = require('fs');

const files = ['3-wrapper.js', 'files', '6-array.js']

// //Error
// files.forEach(file => {
//   const dirName = __dirname;
//   const filePath = path.resolve(dirName, file)
//   const data = fs.readFileSync(filePath);
//   console.log('File data is', data);
// });

//Exception

files.forEach(file => {
  try {
    const dirName = __dirname;
  const filePath = path.resolve(dirName, file)
  const data = fs.readFileSync(filePath,'utf-42');
  console.log('File data is', data);
  } catch (err) {
    if(err.code === 'ENOENT'){
      console.log('File not found');
    } else {
      throw err;
    }
  }
})




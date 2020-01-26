const fs = require('fs');

//Error first argument(Error first callback pattern)
fs.readFile(__filename,function cb(err,data){
  console.log('File data is',data);
});

console.log('TEST');
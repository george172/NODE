const fs = require('fs');

//Error first argument(pyramid of doom)
fs.readFile(__filename,function cb(err,data){
  fs.writeFile(__filename+'.copy',dats,function cb2(err){
    console.log('File data is',data);
  })
});

console.log('TEST');
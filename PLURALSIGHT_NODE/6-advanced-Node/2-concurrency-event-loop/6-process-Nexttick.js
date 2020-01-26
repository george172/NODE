const fs = require('fs');

function fileSize(filename,cb){
  if(typeof filename !== 'string'){
    return process.nextTick(
      cb,
      new TypeError('arguments should be a string')
    )
  }

  fs.stat(filename,(err,stats) => {
    if(err) return cb(err)
    else cb(null,stats.size);
  })

};


fileSize(arguments.__filename,(err,size) => {
  if(err) throw err;
  else console.log(`Size in KB: ${size/1024}`)
})

console.log('Hello');
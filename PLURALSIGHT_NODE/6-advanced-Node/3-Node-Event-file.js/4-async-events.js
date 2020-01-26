const fs = require('fs');
const EventEmiiter = require('events');

class WithTime extends EventEmiiter {
  execute(asyncFunc,...args){
    console.time('execute');
    this.emit('begin');
    asyncFunc(...args,(err,data) => {
      if(err) return this.emit('error',err); //error
      this.emit('data',data);  //data
      console.timeEnd('execute'); 
      this.emit('end')
    });
  }
};

const withTime = new WithTime();

// withTime.on('begin',() => console.log('About to execute'));
// withTime.on('end',() => console.log('Done with execute'));

// withTime.execute(fs.readFile,__filename);

withTime.on('data',(data) => {
  console.log(`Length: ${data.length}`);
});

withTime.on('data',(data) => {
  console.log(`Characters: ${data.toString().length}`);
});
process.on('uncaughtException',(err) => {
  console.log(err);
  //do some clearup
  process.exit(1); //exit anyway
})

withTime.on('error',console.error);
withTime.execute(fs.readFile,'');
withTime.execute(fs.readFile,__filename);



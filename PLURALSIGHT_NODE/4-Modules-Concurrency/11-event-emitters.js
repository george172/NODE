const eventEmitter = require('events');

//Stream are Event Emitters
//process.stdin,process.stdout

const myEmitter = new eventEmitter();

myEmitter.emit('TEST_EVENT'); //publish
//or
setImmediate(() => {
  myEmitter.emit('TEST_EVENT'); //publish
}) 


myEmitter.on('TEST_EVENT',() => {    //Consume
  console.log('TEST_EVENT was fired')
});

myEmitter.on('TEST_EVENT',() => {    //Consume
  console.log('TEST_EVENT was fired')
});

myEmitter.on('TEST_EVENT',() => {    //Consume
  console.log('TEST_EVENT was fired')
});

//myEmitter.emit('TEST_EVENT'); //publish
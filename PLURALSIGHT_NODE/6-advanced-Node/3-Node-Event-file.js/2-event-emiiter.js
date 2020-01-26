const EventEmiiter = require('events');  //import
class Logger extends EventEmiiter{}      //extend

const logger = new Logger();             //init

logger.emit('event');                    //emit
logger.on('event',listenerFunc);         //addListener
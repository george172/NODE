const slowAdd = (a,b) => {
  setTimeout(() => {
    console.log(a+b);
  },5000);
};

slowAdd(3,3);
slowAdd(4,4);

//Event Loop
//when the Call stack gets empty:
//while the queue is not empty:
//event = dequeue on event if there is a callback call the event's callbacl


//disadvanges
//slow code on stack will block event loop
// amount of event present in the queue we will overwelm the queue

//setImmediate will take precidence over 0 milli seconds timeout


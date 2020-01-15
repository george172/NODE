const theOneFunc = (seconds) => {
  console.log(`Hello after ${seconds} seconds`)
};

setTimeout(theOneFunc,  5* 1000,5);

setTimeout(theOneFunc,  4* 1000,4);

// Hello after 4 seconds

// Hello after 8 seconds

// You can define only ONE function
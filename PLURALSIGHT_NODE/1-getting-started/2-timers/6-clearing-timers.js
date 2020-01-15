const timerId = setTimeout(() => {
  console.log('You will not see this one')
},5);

clearTimeout(timerId);
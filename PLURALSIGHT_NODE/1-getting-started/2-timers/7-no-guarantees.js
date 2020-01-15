setTimeout(() => {
  console.log('Hello after 0.5 seconds Maybe!')
},500);

for(i=0;i<1e10;i++){
  // Block Node Synchronously
  console.log(i)
}
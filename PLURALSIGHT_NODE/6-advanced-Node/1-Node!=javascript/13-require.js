const print = (stars,header) => {
  console.log('*'.repeat(stars));
  console.log(header);
  console.log('*',repeat(stars));
}

if(require.main == module){
  //Running as a scripts
  print(process.argv[2],process.argv[3])
  console.log('This is arguments')
} else {
  //Being require
  module.exports = print;
  console.log('this is modules');
}

//caching
require('./ascii-art')
console.log(require.cache);
delete require.cache['//'] //Don't do this
require('./ascii-art')();

//solution
module.exports = () => {
  console.log('exports')
}

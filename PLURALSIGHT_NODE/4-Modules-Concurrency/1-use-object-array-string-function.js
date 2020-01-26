const api = require('./5-objects');
console.log(require('./2-array'));
console.log(require('./7.string'))
const templateGenerator = require('/4-function');

const myTemplate = templateGenerator('Hello world');
console.log(myTemplate);

console.log(api.language,api.direction,api.encoding);
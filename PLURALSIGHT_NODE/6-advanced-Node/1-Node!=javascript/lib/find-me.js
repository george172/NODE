setImmediate(() => {

console.log('In ./lib/find-me.js');
console.log('1',module)

//circulare dependency objects

// require('../index');

exports.id = 'find-me';
});

//cannot use export function inside timers


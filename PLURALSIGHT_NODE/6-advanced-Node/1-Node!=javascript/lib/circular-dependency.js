exports.id = 'm1';
exports.content = [1];
const m2 = require('./circular-dependency_2');
exports.content.push(11);
exports.content.push(111);
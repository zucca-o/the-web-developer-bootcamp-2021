const add = (x, y) => x + y;

const PI = 3.14159;

const square = x => x * x;

exports.add = add;
exports.PI = PI;

// ↑でも↓でもどっちの記述でもOK

module.exports.square = square;
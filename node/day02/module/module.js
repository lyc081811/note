// CMD的规范
// define(function (require, module, exports) {
  
// 在NODE中实现的是Commonjs规范,不用define
function convert(input) {
  return parseFloat(input);
}

function add(a, b) {
  return convert(a) + convert(b);
}

function subtract(a, b) {
  return convert(a) - convert(b);
}

function mutiply(a, b) {
  return convert(a) * convert(b);
}

function divide(a, b) {
  return convert(a) / convert(b);
}
  
// ES6的语法“自动属性”
module.exports = { add, subtract, mutiply, divide };
  // module.exports = {
  //   add: add,
  //   subtract: subtract,
  //   mutiply: mutiply,
  //   divide: divide
  // };

// });

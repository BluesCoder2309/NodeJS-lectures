module.exports.sum = (x, y) => {
  return x + y;
};
function sub(x, y) {
  return x - y;
}
function mul(x, y) {
  return x * y;
}
function div(x, y) {
  return x / y;
}

//2 ways to make modules

           // i) Common JS Module
           //using module.exports or just exports
           // module.exports = {
           //   add: sum,
           // };              // or you can directly export the function. eg, Line 1

// ii) ES6 Module

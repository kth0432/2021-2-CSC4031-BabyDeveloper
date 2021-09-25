const {odd, even} = require('./test');
const checkNumber = require('./test1');

function checkStringOddorEven(str) {
  if(str.length % 2) {
    return odd;
  } else {
    return even;
  }
}

console.log(checkNumber(10)); // 짝수입니다.
console.log(checkStringOddorEven('hello')); // 홀수입니다.

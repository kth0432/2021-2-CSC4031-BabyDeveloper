const {odd, even} = require('./test');
// console.log(odd); // atom에서는 Encoding 오류로 인해 결과가 나오지 않음.

function checkNumber(number){
  if(number % 2){
    return odd;
  } else {
    return even;
  }
}

module.exports = checkNumber;
// exports.함수 식으로 선언하는 것은 불가능
// module.exports = exports = {}이나 함수에서는 가능하지 않음.
// exports는 test1에서의 exports.odd = odd;를 가리킴;
// 한 가지만 exports 할 때에는 module.exports를 사용하고,
// 여러 개를 할 때에는 exports.odd = odd; 식으로 선언
// module.exports와 exports는 혼용할 수 없음.

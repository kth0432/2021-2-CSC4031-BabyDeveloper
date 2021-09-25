const odd = '홀수입니다';
const even = '짝수입니다';

/*
module.exports = {
  even, odd, // 객체에서 순서 상의 차이는 없다.
}; // [] : 배열 형식으로 넘겨줄 수 있고, 객체로 넘겨줄 수 있음.
// module.exports = odd; 식으로도 할 수 있기 때문에
// module.exports = 함수 () 식으로도 할 수 있다.

// exports.odd = odd; exports.even = even;
// 두 코드는 module.exports = { odd, even }; 과 동일하다.
*/

exports.odd = odd;
exports.even = even;

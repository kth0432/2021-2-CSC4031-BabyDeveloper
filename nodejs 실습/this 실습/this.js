console.log(this); // global ?
// anonymous에서는 global이 아니다, 빈 객체이다.
console.log(this === module.exports);
console.log(module.exports === exports);
// 따라서 exports.odd = odd;를
// this.odd = odd;로도 선언이 가능하다

function a(){
  console.log(this === global);
} // function 안에서는 global이다.
a();

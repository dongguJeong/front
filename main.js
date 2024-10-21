// 함수 선언문
function plus(a, b) {
  console.log(a + b);
}
plus(1, 2);

// 함수 표현식
const add = function (a, b) {
  console.log(a + b);
};
add(1, 2);

//생성자 함수
const add2 = new Function("a", "b", "console.log(a + b)");
add2(1, 2);

//화살표 함수
const add3 = (a, b) => {
  return a + b;
};

add3(1, 2);

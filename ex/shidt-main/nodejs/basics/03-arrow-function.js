//일반함수와 화살표함수(ES6 - ES2015)

//함수형 변수(함수 표현식)
let hi = function() {
    return '안녕하세요?';
}
console.log( hi() );

//일반함수의 매개변수로 전달
function sayHi( method ){
    console.log( method() );
}
sayHi( hi );

//화살표 함수로 변환
let hi2 = () => {
    return '안녕하세요?';
};
sayHi( hi2 );

let sum = (a, b) => {
    return a + b;
}
console.log( sum(10, 20) );

//화살표함수의 수행문(본문)이 한줄이면, 중괄호,return 생략가능
let sub = (a, b) => a - b;
console.log( sub(10,20) );

let double = a => a * 2; //매개변수가 하나이면 소괄호 생략
console.log( double(10) );






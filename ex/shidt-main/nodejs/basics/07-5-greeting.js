const hello = (name) => {
    console.log( `${ name } 님, 안녕하세요?` );
};

const buy = (name) => {
    console.log( `${ name } 님, 안녕가세요.` );
};

//복수 모듈 내보내기
// exports.hello = hello;
// exports.buy = buy;

//단일 모듈 내보내기
module.exports = { hello, buy }; //키와 밸류가 같으면 하나로 생략.

let person = {
    name : 'hong',
    age : 20
};
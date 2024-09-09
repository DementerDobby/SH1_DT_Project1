//fs 모듈 사용하기
const fs = require('fs');

//fs 모듈 : File System 제어에 관한 기능을 제공. 파일(폴더)목록, 파일 읽기/쓰기 기능

//현재 디렉토리(경로, 폴더) 읽기
//1. readdirSync(동기) : 다 읽을 때까지 Blocking(기다림)한다.
//2. readdir(비동기) : 다 읽을 때까지 Non-Blocking(기다리지 않음)한다.

//문자열 배열로 현재 경로의 파일과 폴더(디렉토리)목록을 반환한다.
let files = fs.readdirSync("./"); //.\\으로 줘도 된다.
console.log( files );
console.log("나는 딴일을 할래~");

fs.readdir("./", (err, files)=>{
    if(err){
        console.log( err );
        return;
    }
    console.log( files );
    
 });
console.log( "나는 다른일을 한다." );



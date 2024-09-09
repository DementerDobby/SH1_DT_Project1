const fs = require("fs");

const appendData  = "추가되는 내용입니다.";

if( fs.existsSync("./test-1.txt") ){
    console.log("파일 존재함.");
    
    fs.writeFileSync("./test-1.txt", appendData, { flag: "a" });
}

fs.appendFile('./test-2.txt', "\n\n 새로운 내용추가", (err)=>{
    if(err){
        console.log( err );
    }
    console.log("파일 내용 추가 완료!");
});


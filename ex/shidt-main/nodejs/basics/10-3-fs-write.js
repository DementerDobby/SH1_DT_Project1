const fs = require("fs");

//파일 쓰기
//1. writeFileSync(동기)
//2. writeFile(비동기)

let data = "This is test file.";
fs.writeFileSync("test-1.txt", data);

fs.writeFile("test-2.txt", data, (err)=>{ 
    if(err){
        console.log(err);        
    }
    console.log("파일 쓰기 성공!");
} );
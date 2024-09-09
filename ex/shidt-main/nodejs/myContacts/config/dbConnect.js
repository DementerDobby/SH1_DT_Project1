const mongoose = require("mongoose");
require("dotenv").config(); //.env 파일에 수록된 정보를 가져옴.

const dbConnect = async () => {
    try{
        const connect = await mongoose.connect(process.env.DB_CONNECT);
        console.log("DB Connected!");
    } catch(err){
        console.log( err );
    }
};

module.exports = dbConnect;
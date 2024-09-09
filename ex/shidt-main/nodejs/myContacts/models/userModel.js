const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//사용자 스키마를 만든다.
const UserSchema = new Schema({
    username: {
        type: String,
        required: true, //필수속성으로 지정
        unique: true  //중복할 수 없도록 지정
    },
    password: {
        type: String,
        required: true, //필수속성으로 지정
    }
});

//User 모델을 만들고 내보내기 한다.
module.exports = mongoose.model("User", UserSchema);
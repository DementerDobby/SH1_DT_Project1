import React, { useState } from "react";

function NameForm(props) {
  //    값을 읽을때, 값을 바꿀때
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    //value = event.target.value; //반드시 set함수를 이용해야 된다!
    setValue(event.target.value); //입력태그의 값(value)을 상태변수에 적용
  };

  const handleSubmit = (event) => {
    console.log("입력한 이름:" + value);
    event.preventDefault(); //기본기능을 막음. submit기능-통신을 보내는 기능
  };

  return (
    <form action="#" onSubmit={handleSubmit}>
      <label>
        이름:
        <input type="text" value={value} onChange={handleChange}></input>
      </label>
      <button type="submit">제출</button>
    </form>
  );
}

export default NameForm;

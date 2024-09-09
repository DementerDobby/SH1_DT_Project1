import { useState } from "react";

function ConfirmButton(props) {
  const [isConfirmed, setIsConfirmed] = useState(false);

  //이벤트 핸들러(콜백함수) 정의
  const handleConfirm = (id, event) => {
    console.log("id:" + id);
    setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed); //논리반전
  };

  return (
    <button
      onClick={(event) => {
        console.log("event:" + event);
        handleConfirm(1, event);
      }}
      disabled={isConfirmed}
    >
      {isConfirmed ? "확인됨" : "확인하기"}
    </button>
  );
}

export default ConfirmButton;

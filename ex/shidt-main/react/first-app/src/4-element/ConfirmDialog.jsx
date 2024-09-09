// import React from "react";
// React 18에서는 생략 가능하다.

function Button(props) {
  return (
    <button style={{ color: `${props.color}` }}>
      <b>{props.children}</b>
    </button>
  );
}
function ConfirmDialog(props) {
  return (
    <div>
      <p>내용을 확인하셨으면 확인 버튼을 눌러주세요.</p>
      <Button color="green">
        <span>확인</span>
        <br />
        <span>버튼</span>
      </Button>
    </div>
  );
}

export default ConfirmDialog;

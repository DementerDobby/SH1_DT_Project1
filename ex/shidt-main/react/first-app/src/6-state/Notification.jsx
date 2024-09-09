import React from "react";

const styles = {
  wrapper: {
    margin: 8,
    padding: 8,
    display: "flex",
    flexDirection: "row",
    border: "1px solid grey",
    borderRadius: 16,
  },
  messageText: {
    color: "black",
    fontSize: 16,
  },
};

class Notification extends React.Component {
  // 생성자 : 객체생성시 자동으로 한번 호출(초기화)
  constructor(props) {
    super(props); //부모클래스의 생성자함수를 호출해준다.

    //this : 자신의 현재 객체
    this.state = {};
  }
  //컴퍼넌트가 마운트(생성)시 호출
  componentDidMount() {
    console.log(`${this.props.id} componentDidMount() called.`);
  }
  //컴퍼넌트가 데이터가 수정되었거나 부모컴퍼넌트가 re-render되었을 때
  componentDidUpdate() {
    console.log(`${this.props.id} componentDidUpdate() called.`);
  }
  //컴퍼넌트가 언마운트(소멸)시 호출
  componentWillUnmount() {
    console.log(`${this.props.id} componentWillUnmount() called.`);
  }
  render() {
    console.log(`${this.props.id} render() called.`);
    return (
      <div style={styles.wrapper}>
        <span style={styles.messageText}>{this.props.message}</span>
      </div>
    );
  }
}

export default Notification;

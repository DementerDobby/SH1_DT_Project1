import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
  {
    id: 1,
    message: "안녕하세요. 오늘 일정 알려드립니다.",
  },
  {
    id: 2,
    message: "이벤트 공지 드립니다.",
  },
  {
    id: 3,
    message: "회의가 곧 시작합니다.",
  },
];

let timer;

class NotificationList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { notifications: [] };
  }
  componentDidMount() {
    const { notifications } = this.state;
    timer = setInterval(() => {
      if (notifications.length < reservedNotifications.length) {
        const index = notifications.length;
        notifications.push(reservedNotifications[index]);
        this.setState({ notifications: notifications });
      } else {
        this.setState({
          //notifications: [],
        });
        clearInterval(timer);
      }
    }, 1000);
  }
  componentWillUnmount() {
    if (timer) {
      clearInterval(timer);
    }
  }
  render() {
    return (
      <div>
        {this.state.notifications.map((notification) => {
          return (
            <Notification
              // key : 리스트에서 요소를 구별하기 위한 구별자
              key={notification.id}
              id={notification.id}
              message={notification.message}
            />
          );
        })}
      </div>
    );
  }
}

export default NotificationList;

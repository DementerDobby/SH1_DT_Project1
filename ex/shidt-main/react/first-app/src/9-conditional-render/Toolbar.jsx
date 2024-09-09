const styles = {
  wrapper: {
    padding: 16,
    display: "flex",
    flexDirection: "row",
    borderBottom: "1px solid grey",
  },
  greeting: {
    marginRight: 8,
  },
};

function Toolbar(props) {
  const { isLoggedIn, onClickLogin, onClickLogout } = props;
  return (
    <div style={styles.wrapper}>
      {/* 조건적 렌더링 : 불리언 && 요소 */}
      {isLoggedIn && <span style={styles.greeting}>환영합니다.</span>}

      {/* 조건식 ? 요소1 : 요소2  */}
      {isLoggedIn ? (
        <button onClick={onClickLogout}>로그아웃</button>
      ) : (
        <button onClick={onClickLogin}>로그인</button>
      )}
    </div>
  );
}

export default Toolbar;

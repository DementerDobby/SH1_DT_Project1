function Card(props) {
  //children : 부모컴퍼넌트의 구성요소
  const { title, backgroundColor, children } = props;

  const styles = {
    margin: 8,
    padding: 8,
    borderRadius: 8,
    boxShadow: "0px 0px 4px grey",
    backgroundColor: backgroundColor || "white",
  };

  return (
    <div style={styles}>
      {title && <h1>{title}</h1>}
      {children}
    </div>
  );
}

export default Card;

const scaleNames = {
  c: "섭씨",
  f: "화씨",
};

function TemperatureInput(props) {
  const handleChange = (event) => {
    props.onTemperatureChange(event.target.value);
  };
  return (
    <fieldset>
      <legend>온도를 입력해주세요(단위:{scaleNames[props.scale]});</legend>
      {/* 상위 컴퍼넌트에서 전달한 상태변수를 value로 갖는다 : shared state */}
      <input type="text" value={props.temperature} onChange={handleChange} />
    </fieldset>
  );
}

export default TemperatureInput;

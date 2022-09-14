//
function Input(props) {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      className={props.className}
      onClick={props.onClick}
      onChange={(e) => props.onChange(e)}
      value={props.value}
    />
  );
}

export default Input;

//
import Input from "./Input";
import "./Form.css";
function Form(props) {
  return (
    <div className="form-container">
      <div className="time-container">
        <Input
          type={"time"}
          placeholder={"time"}
          onChange={props.onChangeTimeOne}
          value={props.valueTimeOne}
        />
        <h2>To</h2>

        <Input
          type={"time"}
          placeholder={"time"}
          onChange={props.onChangeTimeTwo}
          value={props.valueTimeTwo}
        />
      </div>

      <Input
        className={"task-input"}
        type={"text"}
        placeholder={"- Write your Tasks here -"}
        onChange={props.onChangeTask}
        value={props.valueTask}
      />

      <div className="btn-form-container">
        <button className="btn-form" onClick={props.onClick}>
          +
        </button>
      </div>
    </div>
  );
}

export default Form;

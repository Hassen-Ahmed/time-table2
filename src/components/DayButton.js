//
import "./DayButton.css";

function DayButton(props) {
  return (
    <button className="days" onClick={props.onClick}>
      {props.dayName}
    </button>
  );
}
export default DayButton;

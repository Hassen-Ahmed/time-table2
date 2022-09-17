//
import "./AlarmBtn.css";
const AlarmBtn = function (props) {
  return (
    <div className="alarm-container">
      <h2 className="alarm-heading">Alarm</h2>
      <div className="alarm-btn-box">
        <button
          className="alarm-on-btn"
          onClick={() => {
            props.onClick();
            props.alarmOnHandler();
          }}
        >
          ON
        </button>
        <button
          className="alarm-off-btn"
          onClick={() => {
            props.onClick();
            props.alarmOffHandler();
          }}
        >
          OFF
        </button>
      </div>
    </div>
  );
};

export default AlarmBtn;

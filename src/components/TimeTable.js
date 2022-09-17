//
import React from "react";
import "./TimeTable.css";

function TimeTable(props) {
  //

  [...document.querySelectorAll(".time-task-container-sub")].forEach(
    (item, i) => {
      if (i % 2 !== 0) {
        item.style.backgroundColor = "rgba(190, 178, 162, 0.5)";
      }
    }
  );

  //

  return (
    <div className="time-table-container">
      <h2>
        <span>{props.dayName}</span> Time-Table
      </h2>
      <button className="btn-sort" onClick={props.sort}>
        Sort &darr;
      </button>
      <div className="time-task-container-main">
        <h2>Time</h2>
        <h2>Tasks</h2>
      </div>
      {props.arr.map((item) => (
        <div className="time-task-container-sub" key={item.key}>
          <p>{item.time}</p>
          <p>{item.task}</p>

          {props.areYouSure && item.key === props.keyValue && (
            <div className="are-you-sure">
              <h2>Are you Sure?</h2>
              <div>
                <button onClick={() => props.areYouSureYesHandler(item.key)}>
                  Yes
                </button>

                <button onClick={props.areYouSureNoHandler}>No</button>
              </div>
            </div>
          )}

          <sub className="when">{item.when}</sub>
          <button
            onClick={() => props.onClick(item.key)}
            className="time-task-delete"
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}

export default TimeTable;

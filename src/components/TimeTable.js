//
import React from "react";
import "./TimeTable.css";

function TimeTable(props) {
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

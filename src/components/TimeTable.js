//
// import React, { useCallback, useState, useEffect } from "react";
// import React, { useState } from "react";

import AlarmBtn from "./AlarmBtn";
import "./TimeTable.css";

function TimeTable(props) {
  //

  // const [docm, setDocm] = useState("");

  // const styling = useCallback(() => {
  //   // let docm = [...document.querySelectorAll(".time-task-container-sub")];

  //   docm.forEach((item, i) => {
  //     if (i % 2 !== 0) {
  //       item.style.backgroundColor = "rgba(190, 178, 162, 0.5)";
  //       // console.log("know styling work!");
  //       // c onsole.log(docm);
  //     }
  //   });
  // }, [docm]);

  // useEffect(() => {
  //   // setDocm([...document.querySelectorAll(".time-task-container-sub")]);
  //   // styling();
  //   async function styling() {
  //     // console.log("it will work ok.");
  //     let docm2 = await document.querySelectorAll(".time-task-container-sub");
  //     setDocm([...docm2]);
  //   }
  //   styling();

  //   docm.forEach((item, i) => {
  //     item.style.backgroundColor = "rgba(190, 178, 162, 0.5)";
  //   });
  // }, [docm]);

  //

  return (
    <div className="time-table-container">
      {props.alarmValue && (
        <AlarmBtn
          onClick={props.alarmBoxHandler}
          alarmOffHandler={props.alarmOffHandler}
          alarmOnHandler={props.alarmOnHandler}
          alarmValue={props.alarmValue}
        />
      )}

      <h2>
        <span>{props.dayName}</span> Time-Table
      </h2>
      <div>
        <button
          className={`${props.alarmOnOff ? "btn-alarm-on" : "btn-alarm"}`}
          onClick={props.alarmBoxHandler}
        >
          Alarm
        </button>
        <button className="btn-sort" onClick={props.sort}>
          Sort &darr;
        </button>
      </div>
      <div className="time-task-container-main">
        <h2>Time</h2>
        <h2>Tasks</h2>
      </div>
      {props.arr.map((item, i) => (
        <div
          className={`time-task-container-sub ${
            i % 2 === 0 && "time-task-container-sub-add"
          } ${i === props.alarmTag && "alarm-red"}`}
          key={item.key}
        >
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

//
// import React, { useCallback, useState, useEffect } from "react";
// import React, { useState } from "react";

import AlarmBtn from "./AlarmBtn";
import "./TimeTable.css";

function TimeTable(props) {
  // useEffect(() => {
  //   setTimeout(() => {
  //     setCurrentTime(new Date().toLocaleTimeString());
  //     setWhen(new Date().toLocaleDateString());
  //   }, 1000);

  //   if (alarmOnOff) {
  //     // console.log("alarm on");
  //     arr.forEach((item, i) => {
  //       let timeForAlarm = String(item.time.slice(0, 5));

  //       if (timeForAlarm[0] === "0") {
  //         timeForAlarm = String(item.time.slice(1, 5));
  //         // console.log("is Zero");
  //       } else if (timeForAlarm[0] === "1") {
  //         timeForAlarm = String(item.time.slice(0, 5));
  //         // setIndexOfAlarm("");
  //         // console.log("not Zero", timeForAlarm);
  //       }

  //       if (
  //         timeForAlarm === String(currentTime).replace(" PM", "").slice(0, 4)
  //       ) {
  //         sound.play();
  //         setIndexOfAlarm(i);
  //       } else {
  //         setIndexOfAlarm("");
  //       }
  //       console.log(
  //         item.time.slice(0, 5),
  //         "time",
  //         String(currentTime).replace(" PM", "").slice(0, 4)
  //       );
  //     });
  //   } else {
  //     setIndexOfAlarm("");
  //   }
  // }, [arr, currentTime, sound, alarmOnOff]);

  //

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
          className={`${props.alarmTag ? "btn-alarm-on" : "btn-alarm"}`}
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

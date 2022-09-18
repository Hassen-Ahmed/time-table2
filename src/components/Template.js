// import section down

import React, { useState, useEffect } from "react";
import TimeTable from "./TimeTable";
import Form from "./Form";

import Bleep from "../audio/Bleep.mp3";

import { Howl, Howler } from "howler";

// component setiion down

function Template(props) {
  const [timeOne, setTimeOne] = useState("");
  const [timeTwo, setTimeTwo] = useState("");
  const [task, setTask] = useState("");
  const [when, setWhen] = useState("Unknow");

  const [arr, setArr] = useState([]);
  const [sortArr, setSortArr] = useState("");
  const [isSort, setIsSort] = useState(false);

  const [alarmBox, setAlarmBox] = useState(false);
  const [alarmOnOff, setAlarmOnOff] = useState(true);

  const [areYouSure, setAreYouSure] = useState(false);
  const [keyValue, setKeyValue] = useState("");

  const [indexOfAlarm, setIndexOfAlarm] = useState(null);

  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  const [sound] = useState(
    new Howl({
      src: [Bleep],
      format: ["dolby", "webm", "mp3"],
      html5: true,
      xhr: {
        method: "POST",
        headers: {
          Authorization: "Bearer:",
        },
        withCredentials: true,
      },
    })
  );

  Howler.volume(0.5);

  useEffect(
    function () {
      setTimeout(function () {
        setCurrentTime(new Date().toLocaleTimeString());
        setWhen(new Date().toLocaleDateString());
      }, 1000);

      if (alarmOnOff) {
        arr.forEach(function (item, i) {
          // );

          if (
            String(item.time.slice(0, 5)) ===
            String(
              String(currentTime).replace(" PM", "").slice(0, 4).padStart(5, 0)
            )
          ) {
            // console.log("alarm on");
            setIndexOfAlarm(i);

            // setTimeout(function () {
            //   setIndexOfAlarm("");
            // }, 500);

            sound.play();

            // let timeForAlarm = String(item.time.slice(0, 5));
            // if (timeForAlarm[0] === "0") {
            //   timeForAlarm = String(item.time.slice(1, 5));
            //   // console.log("is Zero");
            // } else if (timeForAlarm[0] === "1") {
            //   timeForAlarm = String(item.time.slice(0, 5));
            //   setIndexOfAlarm("");
            //   // console.log("not Zero", timeForAlarm);
            // }
            // console.log(
            //   item.time.slice(0, 5),
            //   "time",
            //   String(currentTime).replace(" PM", "").slice(0, 4).padStart(5, 0)
            // console.log("know we should rendering it.");
            // soundPlay();
          }
        });
      } else {
        setIndexOfAlarm("");
      }

      // console.log(String(currentTime).replace(" PM", "").slice(0, 5));
    },
    [arr, currentTime, sound, alarmOnOff]
  );

  // onClickTask handler

  const onClickTask = function () {
    if (task.trim() && timeOne.trim() && timeTwo.trim()) {
      setArr(function (prev) {
        return [
          ...prev,
          {
            key: `${Math.random() * 212457}`,
            time: `${timeOne.padStart(5, 0)}  -  ${timeTwo.padStart(5, 0)}`,
            task: `${task}`,
            when: `${when}`,
          },
        ];
      });
      setTimeOne("");
      setTimeTwo("");
      setTask("");
    }
    setIsSort(false);
  };

  // sort Handler
  const sortHandler = function () {
    let sortedList = [];
    arr.forEach((item) => {
      sortedList.unshift(item);
    });
    setSortArr(sortedList);

    isSort ? setIsSort(false) : setIsSort(true);
  };

  const alarmBoxHandler = function () {
    if (alarmBox) {
      setAlarmBox(false);
    } else {
      setAlarmBox(true);
    }
  };

  const alarmOnHandler = function () {
    setAlarmOnOff(true);
  };
  const alarmOffHandler = function () {
    setAlarmOnOff(false);
  };

  // delete and areYouSure Handler
  const onClickDelete = function (item) {
    setAreYouSure(true);
    setKeyValue(item);
  };

  const areYouSureYesHandler = function (item) {
    setArr((prev) => prev.filter((cur) => cur.key !== item));
  };
  const areYouSureNoHandler = function () {
    setAreYouSure(false);
  };

  // onChangeTime handler
  const onChangeTimeOne = function (e) {
    setTimeOne(e.target.value);
  };
  const onChangeTimeTwo = function (e) {
    setTimeTwo(e.target.value);
  };
  const onChangeTask = function (e) {
    setTask(e.target.value);
  };

  // useEffect section down

  useEffect(() => {
    async function loadDataFunc() {
      let loadData = await JSON.parse(localStorage.getItem(props.storageName));
      if (loadData) {
        setArr(loadData);
      }
    }
    loadDataFunc();
  }, [props.storageName]);

  useEffect(
    function () {
      async function setDataFunc() {
        let setData = await JSON.stringify(arr);
        localStorage.setItem(props.storageName, setData);
      }
      setDataFunc();
    },
    [props.storageName, arr]
  );

  // return section down

  return (
    <div>
      <Form
        onChangeTimeOne={onChangeTimeOne}
        onChangeTimeTwo={onChangeTimeTwo}
        onChangeTask={onChangeTask}
        onClick={onClickTask}
        valueTimeOne={timeOne}
        valueTimeTwo={timeTwo}
        valueTask={task}
      />

      <TimeTable
        dayName={props.dayName}
        arr={isSort ? sortArr : arr}
        sort={sortHandler}
        alarmBoxHandler={alarmBoxHandler}
        alarmValue={alarmBox}
        alarmOnOff={alarmOnOff}
        onClick={onClickDelete}
        areYouSureYesHandler={areYouSureYesHandler}
        areYouSureNoHandler={areYouSureNoHandler}
        areYouSure={areYouSure}
        keyValue={keyValue}
        alarmTag={indexOfAlarm}
        alarmOnHandler={alarmOnHandler}
        alarmOffHandler={alarmOffHandler}
      />
    </div>
  );
}

export default Template;

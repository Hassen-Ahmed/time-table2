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
  const [sortArr, setSortArr] = useState(null);
  const [isSort, setIsSort] = useState(false);

  const [areYouSure, setAreYouSure] = useState(false);
  const [keyValue, setKeyValue] = useState("");

  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  const [sound, setSound] = useState(
    new Howl({
      src: Bleep,
    })
  );
  //
  Howler.volume(0.5);

  useEffect(() => {
    const soundPlay = () => sound.play();

    setTimeout(() => {
      setCurrentTime(new Date().toLocaleTimeString());
      setWhen(new Date().toLocaleDateString());
    }, 1000);

    arr.forEach((item) => {
      let timeForAlarm = String(item.time.slice(0, 5));
      if (timeForAlarm[0] === "0") {
        timeForAlarm = String(item.time.slice(1, 5));
      } else if (timeForAlarm[0] === "1") {
        timeForAlarm = String(item.time.slice(0, 5));
      }

      if (
        String(timeForAlarm) ===
        String(currentTime).replace(" PM", "").slice(0, 4)
      ) {
        soundPlay();
      }
    });

    // console.log(String(currentTime).replace(" PM", "").slice(0, 7));
  }, [arr, currentTime, sound]);

  // onClickTask handler

  const onClickTask = function () {
    if (task.trim() && timeOne.trim() && timeTwo.trim()) {
      setArr((prev) => {
        return [
          ...prev,
          {
            key: `${Math.random() * 212457}`,
            time: `${timeOne}  -  ${timeTwo}`,
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
  const sortHandler = () => {
    let sortedList = [];
    arr.forEach((item) => {
      sortedList.unshift(item);
    });
    setSortArr(sortedList);

    isSort ? setIsSort(false) : setIsSort(true);
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

  useEffect(() => {
    async function setDataFunc() {
      let setData = await JSON.stringify(arr);
      localStorage.setItem(props.storageName, setData);
    }
    setDataFunc();
  }, [props.storageName, arr]);

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
        onClick={onClickDelete}
        areYouSureYesHandler={areYouSureYesHandler}
        areYouSureNoHandler={areYouSureNoHandler}
        areYouSure={areYouSure}
        keyValue={keyValue}
      />
    </div>
  );
}

export default Template;

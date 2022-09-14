// import section down

import React, { useState, useEffect } from "react";
import TimeTable from "./TimeTable";
import Form from "./Form";

// component setiion down

function Template(props) {
  const [timeOne, setTimeOne] = useState("");
  const [timeTwo, setTimeTwo] = useState("");
  const [task, setTask] = useState("");

  const [arr, setArr] = useState([]);

  // onClickTask handler

  // const [currentTime, setCurrentTime] = useState(
  //   new Date().toLocaleTimeString()
  // );

  // useEffect(() => {
  //   // setTimeout(() => {
  //   //   setCurrentTime(new Date().toLocaleTimeString());
  //   // }, 1000);

  //   // 01:10 - 02:10
  //   arr.forEach((item) => {
  //     if (item.time.slice(0, 5) === String(currentTime).replace(" PM", "")) {
  //       async function audioHandler() {
  //         let audioOne = await new Audio(
  //           "http://soundbible.com/grab.php?id=1252&type=mp3"
  //         );
  //         audioOne.play();
  //       }

  //       // audioHandler();
  //     }
  //   });

  //   console.log(String(currentTime).replace(" PM", "").slice(0, 4));

  //   // console.log(String(currentTime).replace(" PM", ""), "str");
  // }, [currentTime]);

  const onClickTask = function () {
    if (task && timeOne && timeTwo) {
      setArr((prev) => {
        return [
          ...prev,
          {
            key: `${Math.random() * 212457}`,
            time: `${timeOne}  -  ${timeTwo}`,
            task: `${task}`,
          },
        ];
      });
      setTimeOne("");
      setTimeTwo("");
      setTask("");
    }
  };

  const sortHandler = () => {
    setArr((prev) => {
      const arrTest = [];

      prev.forEach((item) => {
        arrTest.unshift(item);
      });

      return [...arrTest];
    });
  };

  const onClickDelete = function (item) {
    setArr((prev) => prev.filter((cur) => cur.key !== item));
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
        arr={arr}
        onClick={onClickDelete}
        sort={sortHandler}
      />
    </div>
  );
}

export default Template;

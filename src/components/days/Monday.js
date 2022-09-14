// // import section down

import Template from "../Template";

function Monday(props) {
  return (
    <div>
      <Template storageName={"mon"} dayName={"Monday"} />
    </div>
  );
}

export default Monday;

//
// import React, { useState, useEffect } from "react";
// import TimeTable from "./TimeTable";
// import Form from "./Form";

// // component setiion down

// function Monday() {
//   const [timeOne, setTimeOne] = useState("");
//   const [timeTwo, setTimeTwo] = useState("");
//   const [task, setTask] = useState("");

//   const [arrMon, setArrMon] = useState([]);

//   // onClickTask handler

//   const onClickTask = function () {
//     if (task) {
//       setArrMon((prev) => {
//         return [
//           ...prev,
//           {
//             key: `${Math.random() * 212457}`,
//             time: `${timeOne} to ${timeTwo}`,
//             task: `${task}`,
//           },
//         ];
//       });
//       setTimeOne("");
//       setTimeTwo("");
//       setTask("");
//     }
//   };

//   const sortHandler = () => {
//     setArrMon((prev) => {
//       const arrTest = [];

//       prev.forEach((item) => {
//         arrTest.unshift(item);
//       });

//       return [...arrTest];
//     });
//   };

//   const onClickDelete = function (item) {
//     setArrMon((prev) => prev.filter((cur) => cur.key !== item));
//   };

//   // onChangeTime handler
//   const onChangeTimeOne = function (e) {
//     setTimeOne(e.target.value);
//   };
//   const onChangeTimeTwo = function (e) {
//     setTimeTwo(e.target.value);
//   };
//   const onChangeTask = function (e) {
//     setTask(e.target.value);
//   };

//   // useEffect section down
//   useEffect(() => {
//     async function loadDataFunc() {
//       let loadData = await JSON.parse(localStorage.getItem("mon"));
//       if (loadData) {
//         setArrMon(loadData);
//       }
//     }
//     loadDataFunc();
//   }, []);

//   useEffect(() => {
//     async function setDataFunc() {
//       let setData = await JSON.stringify(arrMon);
//       localStorage.setItem("mon", setData);
//     }
//     setDataFunc();
//   }, [arrMon]);

//   // return section down

//   return (
//     <div>
//       <Form
//         onChangeTimeOne={onChangeTimeOne}
//         onChangeTimeTwo={onChangeTimeTwo}
//         onChangeTask={onChangeTask}
//         onClick={onClickTask}
//         valueTimeOne={timeOne}
//         valueTimeTwo={timeTwo}
//         valueTask={task}
//       />
//       <TimeTable
//         dayName={"Monday"}
//         arr={arrMon}
//         onClick={onClickDelete}
//         sort={sortHandler}
//       />
//     </div>
//   );
// }

// export default Monday;

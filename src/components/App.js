//
import React, { useState } from "react";
import "./App.css";
import DayButton from "./DayButton";
import HomePage from "./HomePage";

import Monday from "./days/Monday";
import Tuesday from "./days/Tuesday";
import Wednseday from "./days/Wednseday";
import Thursday from "./days/Thursday";
import Friday from "./days/Friday";
import Saturday from "./days/Saturday";
import Sunday from "./days/Sunday";

function App() {
  const [mon, setMon] = useState(false);
  const [tues, setTues] = useState(false);
  const [wed, setWed] = useState(false);
  const [thur, setThur] = useState(false);
  const [fri, setFri] = useState(false);
  const [sat, setSat] = useState(false);
  const [sun, setSun] = useState(false);

  const [display, setDisplay] = useState(false);
  const [welcome, setWelcome] = useState(true);

  const makeAllFalse = function (day) {
    setMon(false);
    setTues(false);
    setWed(false);
    setThur(false);
    setFri(false);
    setSat(false);
    setSun(false);

    setWelcome(false);

    day === "mon" && setMon(true);
    day === "tues" && setTues(true);
    day === "wed" && setWed(true);
    day === "thur" && setThur(true);
    day === "fri" && setFri(true);
    day === "sat" && setSat(true);
    day === "sun" && setSun(true);
  };

  return (
    <div>
      {!display && <HomePage changeDispaly={() => setDisplay(true)} />}
      {display && (
        <div className="App">
          <div className="day-container">
            <DayButton dayName={"Monday"} onClick={() => makeAllFalse("mon")} />
            <DayButton
              dayName={"Tuesday"}
              onClick={() => makeAllFalse("tues")}
            />
            <DayButton
              dayName={"Wednesday"}
              onClick={() => makeAllFalse("wed")}
            />
            <DayButton
              dayName={"Thursday"}
              onClick={() => makeAllFalse("thur")}
            />
            <DayButton dayName={"Friday"} onClick={() => makeAllFalse("fri")} />
            <DayButton
              dayName={"Saturday"}
              onClick={() => makeAllFalse("sat")}
            />
            <DayButton dayName={"Sunday"} onClick={() => makeAllFalse("sun")} />
          </div>

          {welcome && <h1 className="welcome">Welcome!</h1>}

          {mon && <Monday />}
          {tues && <Tuesday />}
          {wed && <Wednseday />}
          {thur && <Thursday />}
          {fri && <Friday />}
          {sat && <Saturday />}
          {sun && <Sunday />}
        </div>
      )}
    </div>
  );
}

export default App;

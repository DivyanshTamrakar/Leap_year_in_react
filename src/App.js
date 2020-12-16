import React, { useState } from "react";
import "./styles.css";
var placeholder = "Enter year";
var btncontext = "Click me to check";

export default function App() {
  var getinput;
  function chnagehandler(event) {
    // console.log(event.target.value);
    getinput = event.target.value;
  }

  function clickhandler() {
    console.log(getinput);

    if (getinput === undefined) {
      alert("year can't be empty");
    } else if (getinput.length < 4) {
      alert("year is never less than 4 digit");
    } else if (getinput.length > 5) {
      alert("year is never greater than 5  digit");
    } else {
      var result = checkyear(getinput);
      if (result === true) {
        setState("Leap Year");
      } else {
        setState("Not Leap Year");
      }
    }
  }

  function checkyear(year) {
    if (year % 400 == 0) return true;

    if (year % 100 == 0) return false;

    if (year % 4 == 0) return true;
    return false;
  }

  var [current, setState] = useState("");

  return (
    <div className="App">
      <div className="header">
        {" "}
        <h1>Leap year Programme in React</h1>
      </div>
      <div className="input-element">
        <input
          type="number"
          placeholder={placeholder}
          className="input margin "
          onChange={chnagehandler}
        ></input>
      </div>
      <div>
        <button className="margin button" onClick={clickhandler}>
          {btncontext}
        </button>
      </div>

      <div className="margin output">{current}</div>
    </div>
  );
}

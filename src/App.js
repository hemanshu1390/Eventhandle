import React from 'react';
import './App.css';

import { useState } from "react";


const FunctionClick = () => {
  const Grey = "grey";
  const [bg, setBg] = useState(Grey);   //current state  ,function to update it

  const bgChange = () => {
    let bgClr = "yellow";
    document.getElementById("output1").innerHTML = "Yellow";
    setBg(bgClr);
  };

  const bgBack = () => {
    let bgClr = "white";
    document.getElementById("output1").innerHTML = "";
    setBg(bgClr);
  };

   function clickHandler1() {
    console.log("Button clicked here");
    document.getElementById("output1").innerHTML = "Dark purple";
    let bgClr = "#210062";
    setBg(bgClr);
  }
  function Orange1() {
    console.log("Button clicked here");
    document.getElementById("output1").innerHTML = "Orange";
    let bgClr = "Orange";
    setBg(bgClr);
  }

  function Red1() {
    console.log("Button clicked here");
    document.getElementById("output1").innerHTML = "Red";
    let bgClr = "red";
    setBg(bgClr);
  }
  function Green1() {
    console.log("Button clicked here");
    document.getElementById("output1").innerHTML = "Green";
    let bgClr = "Green";
    setBg(bgClr);
  }

  function Cyan1() {
    console.log("Button clicked here");
    document.getElementById("output1").innerHTML = "Cyan";
    let bgClr = "Cyan";
    setBg(bgClr);
  }

  function Pink1() {
    console.log("Button clicked here");
    document.getElementById("output1").innerHTML = "Pink";
    let bgClr = "pink";
    setBg(bgClr);
  }

  return (
    <div style={{ backgroundColor: bg }}>
      <div className="">
        <button id="button1" onClick={bgChange} onDoubleClick={bgBack} style={{}}>
          {" "}Yellow
        </button>
        
        
        <button onClick={clickHandler1} onDoubleClick={bgBack}>
          Dark Purple{" "}
        </button>

        <button onClick={Orange1} onDoubleClick={bgBack}>
          Orange{" "}
        </button>
        
        <button onClick={Red1} onDoubleClick={bgBack}>
          Red{" "}
        </button>

        <button onClick={Green1} onDoubleClick={bgBack}>
          Green{" "}
        </button>

        <button onClick={Cyan1} onDoubleClick={bgBack}>
          Cyan{" "}
        </button>
        <button onClick={Pink1} onDoubleClick={bgBack}>
          Pink{" "}
        </button>
      <p id="output1" ></p>
      </div>
    </div>
  );
};



export default FunctionClick;

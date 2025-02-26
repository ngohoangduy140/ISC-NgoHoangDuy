import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Line from "./component/line/line";
import Circle from "./component/circle/circle";

function App() {
  const [currentComponent, setCurrentComponent] = useState("circle");

  return (
    <div className="App">
      {currentComponent === "line" && <Line />}
      {currentComponent === "circle" && <Circle />}
      <div className="button-container">
        <button
          className="btn btn-primary m-2"
          onClick={() => setCurrentComponent("line")}
        >
          Show Line
        </button>
        <button
          className="btn btn-primary m-2"
          onClick={() => setCurrentComponent("circle")}
        >
          Show Circle
        </button>
      </div>
    </div>
  );
}

export default App;

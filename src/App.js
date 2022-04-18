import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import RightComp from "./components/RightComp";
import TopComp from "./components/TopComp";
import LeftComp from "./components/LeftComp";


function App() {
  return (
    <div className="App">
      <div class="container">
        <TopComp />
        <RightComp />
        <LeftComp />
      </div>
    </div>
  );
}

export default App;

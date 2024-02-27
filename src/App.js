import React from "react";
import { UseState } from "./Components/UseState";
import { ClassState } from "./Components/ClassState";
import "./App.css";

function App() {
  return (
    <div className="App">
      <UseState name="Use State" />
      <ClassState name="Class State" />
    </div>
  );
}

export default App;

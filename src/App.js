import React from "react";
import "./App.css";
 
import Camera from "./Camera";
import AllCameras from "./AllCameras";

export default function App() {
  return (
    <div className="App">
     <AllCameras/>
     <Camera/>
    </div>
  );
}
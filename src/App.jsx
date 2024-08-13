import { useState } from "react";
import { Resume } from "./components/Resume";
import Editor from "./components/Editor";
import "./App.css";

function App() {
  return (
    <>
      <Editor />
      <Resume />
    </>
  );
}

export default App;

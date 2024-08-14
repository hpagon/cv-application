import { useState } from "react";
import { Resume } from "./components/Resume";
import Editor from "./components/Editor";
import "./App.css";

const emptyData = {
  id: { fullName: 0, phoneNumber: 1, email: 2, linkedIn: 3, github: 4 },
  0: "",
  1: "",
  2: "",
  3: "",
  4: "",
};

function App() {
  const [resumeData, setResumeData] = useState(emptyData);
  const editResumeData = (newData) => setResumeData(newData);
  return (
    <>
      <Editor handleChange={editResumeData} resumeData={resumeData} />
      <Resume resumeData={resumeData} />
    </>
  );
}

export default App;

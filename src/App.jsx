import { useState } from "react";
import { Resume } from "./components/Resume";
import Editor from "./components/Editor";
import "./App.css";

const emptyData = {
  id: {
    fullName: 0,
    phoneNumber: 1,
    email: 2,
    linkedIn: 3,
    github: 4,
    languages: 5,
    frameworks: 6,
    devTools: 7,
    libraries: 8,
    linkedInUrl: 9,
    githubUrl: 10,
  },
  school: [],
  experience: [],
  project: [],
  0: "",
  1: "",
  2: "",
  3: "",
  4: "",
  5: "",
  6: "",
  7: "",
  8: "",
  9: "",
  10: "",
};

function App() {
  const [resumeData, setResumeData] = useState(emptyData);

  const editResumeData = (newData) => setResumeData(newData);

  console.log(resumeData);
  return (
    <>
      <Editor handleChange={editResumeData} resumeData={resumeData} />
      <Resume resumeData={resumeData} />
    </>
  );
}

export default App;

import { useState } from "react";
import { Resume } from "./components/Resume";
import Editor from "./components/Editor";
import Menu from "./components/Menu";
import { emptyData } from "./initialData";
import "./App.css";

function App() {
  const [resumeData, setResumeData] = useState(emptyData);

  const editResumeData = (newData) => setResumeData(newData);

  console.log(resumeData);
  return (
    <>
      <Menu handleChange={editResumeData} />
      <Editor handleChange={editResumeData} resumeData={resumeData} />
      <Resume resumeData={resumeData} />
    </>
  );
}

export default App;

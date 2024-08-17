import { useState } from "react";
import { Resume } from "./components/Resume";
import Editor from "./components/Editor";
import Menu from "./components/Menu";
import { emptyData } from "./initialData";
import "./App.css";

function App() {
  const [resumeData, setResumeData] = useState(emptyData);

  const editResumeData = (newData) => setResumeData(newData);

  return (
    <>
      <Menu handleChange={editResumeData} />
      <div id="container">
        <div>
          <Editor handleChange={editResumeData} resumeData={resumeData} />
        </div>
        <div>
          <Resume resumeData={resumeData} />
        </div>
      </div>
    </>
  );
}

export default App;

import { useState } from "react";
import { Resume } from "./components/Resume";
import Editor from "./components/Editor";
import Menu from "./components/Menu";
import { emptyData } from "./initialData";
import "./App.css";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

function App() {
  const resumeRef = useRef();
  const handlePrint = useReactToPrint({
    pageStyle: `
    @page {
      margin: 0mm;
    }
    @media print {
      :root {
        font-size: 22px;
      }
      #resume {
        height: 100vh;
      }
    }
    `,
    content: () => resumeRef.current,
  });
  const [resumeData, setResumeData] = useState(emptyData);
  const [mobile, setMobile] = useState(window.innerWidth < 440 ? true : false);

  const editResumeData = (newData) => setResumeData(newData);
  function checkWindowWidth() {
    setMobile(window.innerWidth < 440 ? true : false);
  }
  window.addEventListener("resize", checkWindowWidth);

  return (
    <>
      <Menu
        handleChange={editResumeData}
        handlePrint={handlePrint}
        mobile={mobile}
      />
      <div id="container">
        <div>
          <Editor handleChange={editResumeData} resumeData={resumeData} />
        </div>
        <div id="resume-container">
          <Resume resumeData={resumeData} ref={resumeRef} />
        </div>
      </div>
    </>
  );
}

export default App;

import Dropdown from "./Dropdown";
import SchoolEdit from "./SchoolEdit";
import ExperienceEdit from "./ExperienceEdit";
import ProjectEdit from "./ProjectEdit";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

export default function Editor({ handleChange, resumeData, handleInsert }) {
  //keeps track of which root dropdown is open (only one can be open at a time)
  const [open, setOpen] = useState("");

  function openDropDown(id) {
    if (open === id) {
      setOpen("");
      return;
    }
    setOpen(id);
  }
  return (
    <div>
      <Dropdown
        title="Personal"
        key="Personal"
        type="large"
        open={open === "Personal"}
        handleOpen={openDropDown}
      >
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            name="fullName"
            onChange={(e) =>
              handleChange({
                ...resumeData,
                [resumeData.id.fullName]: e.target.value,
              })
            }
            value={resumeData[resumeData.id.fullName]}
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            onChange={(e) =>
              handleChange({
                ...resumeData,
                [resumeData.id.phoneNumber]: e.target.value,
              })
            }
            value={resumeData[resumeData.id.phoneNumber]}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            onChange={(e) =>
              handleChange({
                ...resumeData,
                [resumeData.id.email]: e.target.value,
              })
            }
            value={resumeData[resumeData.id.email]}
          />
        </div>
        <div>
          <label htmlFor="linkedIn">LinkedIn</label>
          <input
            type="text"
            name="linkedIn"
            onChange={(e) =>
              handleChange({
                ...resumeData,
                [resumeData.id.linkedIn]: e.target.value,
              })
            }
            value={resumeData[resumeData.id.linkedIn]}
          />
        </div>
        <div>
          <label htmlFor="github">GitHub</label>
          <input
            type="text"
            name="github"
            onChange={(e) =>
              handleChange({
                ...resumeData,
                [resumeData.id.github]: e.target.value,
              })
            }
            value={resumeData[resumeData.id.github]}
          />
        </div>
      </Dropdown>
      <Dropdown
        title="Education"
        key="Education"
        type="large"
        open={open === "Education"}
        handleOpen={openDropDown}
      >
        {resumeData.school.map((id) => {
          return (
            <Dropdown title={resumeData[id]["schoolName"]} key={id}>
              <SchoolEdit
                handleChange={handleChange}
                resumeData={resumeData}
                schoolId={id}
              />
            </Dropdown>
          );
        })}
        <button
          onClick={() => {
            const newId = uuidv4();
            handleChange({
              ...resumeData,
              school: [...resumeData.school, newId],
              [newId]: {
                schoolName: "",
                major: "",
                location: "",
                startDate: "",
                endDate: "",
              },
            });
          }}
        >
          Add New Education
        </button>
      </Dropdown>
      <Dropdown
        title="Experience"
        key="Experience"
        type="large"
        open={open === "Experience"}
        handleOpen={openDropDown}
      >
        {resumeData.experience.map((id) => {
          return (
            <Dropdown key={id} title={resumeData[id]["positionName"]}>
              <ExperienceEdit
                handleChange={handleChange}
                resumeData={resumeData}
                experienceId={id}
              />
            </Dropdown>
          );
        })}
        <button
          onClick={() => {
            const newId = uuidv4();
            handleChange({
              ...resumeData,
              experience: [...resumeData.experience, newId],
              [newId]: {
                positionName: "",
                startDate: "",
                endDate: "",
                organization: "",
                location: "",
                description: [],
              },
            });
          }}
        >
          Add New Experience
        </button>
      </Dropdown>
      <Dropdown
        title="Projects"
        key="Projects"
        type="large"
        open={open === "Projects"}
        handleOpen={openDropDown}
      >
        {resumeData.project.map((id) => {
          return (
            <Dropdown key={id} title={resumeData[id]["projectName"]}>
              <ProjectEdit
                handleChange={handleChange}
                resumeData={resumeData}
                projectId={id}
              />
            </Dropdown>
          );
        })}
        <button
          onClick={() => {
            const newId = uuidv4();
            handleChange({
              ...resumeData,
              project: [...resumeData.project, newId],
              [newId]: {
                projectName: "",
                tools: "",
                startDate: "",
                endDate: "",
                description: [],
              },
            });
          }}
        >
          Add New Project
        </button>
      </Dropdown>
      <Dropdown
        title="Technical Skills"
        key="Technical Skills"
        type="large"
        open={open === "Technical Skills"}
        handleOpen={openDropDown}
      >
        <div>
          <label htmlFor="languages">Languages</label>
          <input
            type="text"
            name="languages"
            onChange={(e) =>
              handleChange({
                ...resumeData,
                [resumeData.id.languages]: e.target.value,
              })
            }
            value={resumeData[resumeData.id.languages]}
          />
        </div>
        <div>
          <label htmlFor="frameworks">Frameworks</label>
          <input
            type="text"
            name="frameworks"
            onChange={(e) =>
              handleChange({
                ...resumeData,
                [resumeData.id.frameworks]: e.target.value,
              })
            }
            value={resumeData[resumeData.id.frameworks]}
          />
        </div>
        <div>
          <label htmlFor="devTools">Developer Tools</label>
          <input
            type="text"
            name="devTools"
            onChange={(e) =>
              handleChange({
                ...resumeData,
                [resumeData.id.devTools]: e.target.value,
              })
            }
            value={resumeData[resumeData.id.devTools]}
          />
        </div>
        <div>
          <label htmlFor="libraries">Libraries</label>
          <input
            type="text"
            name="libraries"
            onChange={(e) =>
              handleChange({
                ...resumeData,
                [resumeData.id.libraries]: e.target.value,
              })
            }
            value={resumeData[resumeData.id.libraries]}
          />
        </div>
      </Dropdown>
    </div>
  );
}

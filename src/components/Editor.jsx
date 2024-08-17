import Dropdown from "./Dropdown";
import SchoolEdit from "./SchoolEdit";
import ExperienceEdit from "./ExperienceEdit";
import ProjectEdit from "./ProjectEdit";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

export default function Editor({ handleChange, resumeData }) {
  //keeps track of which root dropdown is open (only one can be open at a time)
  const [largeOpen, setLargeOpen] = useState("");
  const [mediumOpen, setMediumOpen] = useState("");

  function openDropDown(id, type) {
    if (type === "large") {
      if (largeOpen === id) {
        setLargeOpen("");
        return;
      }
      setLargeOpen(id);
    } else {
      if (mediumOpen === id) {
        setMediumOpen("");
        return;
      }
      setMediumOpen(id);
    }
  }
  return (
    <div>
      <Dropdown
        title="Personal"
        key="Personal"
        type="large"
        open={largeOpen === "Personal"}
        handleOpen={openDropDown}
        dropdownId={"Personal"}
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
            type="tel"
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
            type="email"
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
            placeholder="Display text"
          />
          <input
            type="url"
            name="linkedInUrl"
            onChange={(e) =>
              handleChange({
                ...resumeData,
                [resumeData.id.linkedInUrl]: e.target.value,
              })
            }
            value={resumeData[resumeData.id.linkedInUrl]}
            placeholder="https://www.linkedin.com/"
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
            placeholder="Display text"
          />
          <input
            type="url"
            name="githubUrl"
            onChange={(e) =>
              handleChange({
                ...resumeData,
                [resumeData.id.githubUrl]: e.target.value,
              })
            }
            value={resumeData[resumeData.id.githubUrl]}
            placeholder="https://github.com/"
          />
        </div>
      </Dropdown>
      <Dropdown
        title="Education"
        key="Education"
        type="large"
        open={largeOpen === "Education"}
        handleOpen={openDropDown}
        dropdownId={"Education"}
      >
        {resumeData.school.map((id) => {
          return (
            <Dropdown
              title={resumeData[id]["schoolName"]}
              key={id}
              open={mediumOpen === id}
              handleOpen={openDropDown}
              dropdownId={id}
            >
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
        open={largeOpen === "Experience"}
        handleOpen={openDropDown}
        dropdownId={"Experience"}
      >
        {resumeData.experience.map((id) => {
          return (
            <Dropdown
              key={id}
              title={resumeData[id]["positionName"]}
              handleOpen={openDropDown}
              open={mediumOpen === id}
              dropdownId={id}
            >
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
        open={largeOpen === "Projects"}
        handleOpen={openDropDown}
        dropdownId={"Projects"}
      >
        {resumeData.project.map((id) => {
          return (
            <Dropdown
              key={id}
              title={resumeData[id]["projectName"]}
              open={mediumOpen === id}
              handleOpen={openDropDown}
              dropdownId={id}
            >
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
        open={largeOpen === "Technical Skills"}
        handleOpen={openDropDown}
        dropdownId={"Technical Skills"}
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

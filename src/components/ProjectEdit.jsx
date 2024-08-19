import DeleteButton from "./DeleteButton";
import { v4 as uuidv4 } from "uuid";

export default function ProjectEdit({ handleChange, resumeData, projectId }) {
  function showDescriptionDeleteButton(id) {
    handleChange({
      ...resumeData,
      [projectId]: {
        ...resumeData[projectId],
        ["visibility" + id]: "visible",
      },
    });
  }
  function hideDescriptionDeletebutton(id) {
    handleChange({
      ...resumeData,
      [projectId]: {
        ...resumeData[projectId],
        ["visibility" + id]: "hidden",
      },
    });
  }
  return (
    <div>
      <div className="input">
        <label htmlFor="projectName">Project Name</label>
        <input
          type="text"
          name="projectName"
          onChange={(e) =>
            handleChange({
              ...resumeData,
              [projectId]: {
                ...resumeData[projectId],
                projectName: e.target.value,
              },
            })
          }
          value={resumeData[projectId]["projectName"]}
        />
      </div>
      <div className="input">
        <label htmlFor="tools">Tools</label>
        <input
          type="text"
          name="tools"
          onChange={(e) =>
            handleChange({
              ...resumeData,
              [projectId]: {
                ...resumeData[projectId],
                tools: e.target.value,
              },
            })
          }
          value={resumeData[projectId]["tools"]}
        />
      </div>
      <div className="input">
        <label htmlFor="startDate">Start Date</label>
        <input
          type="text"
          name="startDate"
          onChange={(e) =>
            handleChange({
              ...resumeData,
              [projectId]: {
                ...resumeData[projectId],
                startDate: e.target.value,
              },
            })
          }
          value={resumeData[projectId]["startDate"]}
        />
      </div>
      <div className="input">
        <label htmlFor="endDate">End Date</label>
        <input
          type="text"
          name="endDate"
          onChange={(e) =>
            handleChange({
              ...resumeData,
              [projectId]: {
                ...resumeData[projectId],
                endDate: e.target.value,
              },
            })
          }
          value={resumeData[projectId]["endDate"]}
        />
      </div>
      <div className="description">
        <div>
          <p htmlFor="description">Bullet Points</p>
          <button
            className="add"
            onClick={() => {
              const newId = uuidv4();
              handleChange({
                ...resumeData,
                [projectId]: {
                  ...resumeData[projectId],
                  description: [...resumeData[projectId]["description"], newId],
                  [newId]: "",
                  ["visibility" + newId]: "hidden",
                },
              });
            }}
          >
            Add
          </button>
        </div>
        {resumeData[projectId]["description"]["map"]((id) => {
          return (
            <div
              key={id} //make delete button for bullet point visible
              onMouseEnter={() => showDescriptionDeleteButton(id)}
              onMouseLeave={() => hideDescriptionDeletebutton(id)}
            >
              <input
                type="text"
                name="description"
                onChange={(e) =>
                  handleChange({
                    ...resumeData,
                    [projectId]: {
                      ...resumeData[projectId],
                      [id]: e.target.value,
                    },
                  })
                }
                value={resumeData[projectId][id]}
                onBlur={() => hideDescriptionDeletebutton(id)}
                onFocus={() => showDescriptionDeleteButton(id)}
              />
              <DeleteButton
                resumeData={resumeData}
                handleChange={handleChange}
                itemId={projectId}
                type={"project"}
                descriptionId={id}
              />
            </div>
          );
        })}
      </div>
      <DeleteButton
        resumeData={resumeData}
        handleChange={handleChange}
        itemId={projectId}
        type={"project"}
      />
    </div>
  );
}

import DeleteButton from "./DeleteButton";
import { v4 as uuidv4 } from "uuid";

export default function ProjectEdit({ handleChange, resumeData, projectId }) {
  return (
    <div>
      <div>
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
      <div>
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
      <div>
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
      <div>
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
      <div>
        <div>
          <p htmlFor="description">Bullet Points</p>
          <button
            onClick={() => {
              const newId = uuidv4();
              handleChange({
                ...resumeData,
                [projectId]: {
                  ...resumeData[projectId],
                  description: [...resumeData[projectId]["description"], newId],
                  [newId]: "",
                },
              });
            }}
          >
            +
          </button>
        </div>
        {resumeData[projectId]["description"]["map"]((id, index) => {
          return (
            <div key={id}>
              <label htmlFor="description">{index + 1}. </label>
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

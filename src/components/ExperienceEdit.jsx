import DeleteButton from "./DeleteButton";
import { v4 as uuidv4 } from "uuid";

export default function ExperienceEdit({
  handleChange,
  resumeData,
  experienceId,
}) {
  function showDescriptionDeleteButton(id) {
    handleChange({
      ...resumeData,
      [experienceId]: {
        ...resumeData[experienceId],
        ["visibility" + id]: "visible",
      },
    });
  }
  function hideDescriptionDeletebutton(id) {
    handleChange({
      ...resumeData,
      [experienceId]: {
        ...resumeData[experienceId],
        ["visibility" + id]: "hidden",
      },
    });
  }
  return (
    <div>
      <div className="input">
        <label htmlFor="positionName">Position Name</label>
        <input
          type="text"
          name="positionName"
          onChange={(e) =>
            handleChange({
              ...resumeData,
              [experienceId]: {
                ...resumeData[experienceId],
                positionName: e.target.value,
              },
            })
          }
          value={resumeData[experienceId]["positionName"]}
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
              [experienceId]: {
                ...resumeData[experienceId],
                startDate: e.target.value,
              },
            })
          }
          value={resumeData[experienceId]["startDate"]}
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
              [experienceId]: {
                ...resumeData[experienceId],
                endDate: e.target.value,
              },
            })
          }
          value={resumeData[experienceId]["endDate"]}
        />
      </div>
      <div className="input">
        <label htmlFor="organization">Organization Name</label>
        <input
          type="text"
          name="organization"
          onChange={(e) =>
            handleChange({
              ...resumeData,
              [experienceId]: {
                ...resumeData[experienceId],
                organization: e.target.value,
              },
            })
          }
          value={resumeData[experienceId]["organization"]}
        />
      </div>
      <div className="input">
        <label htmlFor="location">Location</label>
        <input
          type="text"
          name="location"
          onChange={(e) =>
            handleChange({
              ...resumeData,
              [experienceId]: {
                ...resumeData[experienceId],
                location: e.target.value,
              },
            })
          }
          value={resumeData[experienceId]["location"]}
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
                [experienceId]: {
                  ...resumeData[experienceId],
                  description: [
                    ...resumeData[experienceId]["description"],
                    newId,
                  ],
                  [newId]: "",
                  ["visibility" + newId]: "hidden",
                },
              });
            }}
          >
            Add
          </button>
        </div>
        {resumeData[experienceId]["description"]["map"]((id) => {
          return (
            <div
              key={id}
              onMouseOver={() => showDescriptionDeleteButton(id)}
              onMouseLeave={() => hideDescriptionDeletebutton(id)}
            >
              <input
                type="text"
                name="description"
                onChange={(e) =>
                  handleChange({
                    ...resumeData,
                    [experienceId]: {
                      ...resumeData[experienceId],
                      [id]: e.target.value,
                    },
                  })
                }
                value={resumeData[experienceId][id]}
                onBlur={() => hideDescriptionDeletebutton(id)}
                onFocus={() => showDescriptionDeleteButton(id)}
              />
              <DeleteButton
                resumeData={resumeData}
                handleChange={handleChange}
                itemId={experienceId}
                type={"experience"}
                descriptionId={id}
              />
            </div>
          );
        })}
      </div>
      <DeleteButton
        resumeData={resumeData}
        handleChange={handleChange}
        itemId={experienceId}
        type={"experience"}
      />
    </div>
  );
}

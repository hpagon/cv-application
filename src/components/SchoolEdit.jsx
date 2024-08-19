import DeleteButton from "./DeleteButton";

export default function SchoolEdit({ handleChange, resumeData, schoolId }) {
  return (
    <div>
      <div className="input">
        <label htmlFor="schoolName">School Name</label>
        <input
          type="text"
          name="schoolName"
          onChange={(e) =>
            handleChange({
              ...resumeData,
              [schoolId]: {
                ...resumeData[schoolId],
                schoolName: e.target.value,
              },
            })
          }
          value={resumeData[schoolId]["schoolName"]}
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
              [schoolId]: {
                ...resumeData[schoolId],
                location: e.target.value,
              },
            })
          }
          value={resumeData[schoolId]["location"]}
        />
      </div>
      <div className="input">
        <label htmlFor="major">Major</label>
        <input
          type="text"
          name="major"
          onChange={(e) =>
            handleChange({
              ...resumeData,
              [schoolId]: {
                ...resumeData[schoolId],
                major: e.target.value,
              },
            })
          }
          value={resumeData[schoolId]["major"]}
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
              [schoolId]: {
                ...resumeData[schoolId],
                startDate: e.target.value,
              },
            })
          }
          value={resumeData[schoolId]["startDate"]}
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
              [schoolId]: {
                ...resumeData[schoolId],
                endDate: e.target.value,
              },
            })
          }
          value={resumeData[schoolId]["endDate"]}
        />
      </div>
      <DeleteButton
        resumeData={resumeData}
        handleChange={handleChange}
        itemId={schoolId}
        type={"school"}
      />
    </div>
  );
}

export default function SchoolEdit({ handleChange, resumeData, schoolId }) {
  return (
    <div>
      <div>
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
      <div>
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
      <div>
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
      <div>
        <label htmlFor="time">Years</label>
        <input
          type="text"
          name="time"
          onChange={(e) =>
            handleChange({
              ...resumeData,
              [schoolId]: {
                ...resumeData[schoolId],
                time: e.target.value,
              },
            })
          }
          value={resumeData[schoolId]["time"]}
        />
      </div>
    </div>
  );
}

import Dropdown from "./Dropdown";

export default function Editor({ handleChange, resumeData }) {
  return (
    <div>
      <Dropdown title="Personal" key="Personal">
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
          <input type="text" name="phoneNumber" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" />
        </div>
        <div>
          <label htmlFor="linkedIn">LinkedIn</label>
          <input type="text" name="linkedIn" />
        </div>
        <div>
          <label htmlFor="github">GitHub</label>
          <input type="text" name="github" />
        </div>
      </Dropdown>
      <Dropdown title="Education" key="Education"></Dropdown>
      <Dropdown title="Experience" key="Experience"></Dropdown>
      <Dropdown title="Projects" key="Projects"></Dropdown>
      <Dropdown title="Technical Skills" key="Technical Skills"></Dropdown>
    </div>
  );
}

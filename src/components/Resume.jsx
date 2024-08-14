import Header from "./Header";
import Section from "./Section";
import School from "./School";
import Experience from "./Experience";
import Project from "./Project";
import Skill from "./Skill";

function Resume({ resumeData }) {
  return (
    <div>
      <Header
        fullName={resumeData[resumeData.id.fullName]}
        phoneNumber={resumeData[resumeData.id.phoneNumber]}
        email={resumeData[resumeData.id.email]}
        linkedIn={resumeData[resumeData.id.linkedIn]}
        github={resumeData[resumeData.id.github]}
      />
      <Section title={"Education"}>
        {resumeData.school.map((schoolId) => {
          return (
            <School
              key={schoolId}
              schoolName={resumeData[schoolId]["schoolName"]}
              location={resumeData[schoolId]["location"]}
              major={resumeData[schoolId]["major"]}
              time={resumeData[schoolId]["time"]}
            />
          );
        })}
      </Section>
      <Section title={"Experience"}>
        <Experience />
      </Section>
      <Section title={"Projects"}>
        <Project />
      </Section>
      <Section title={"Technical Skills"}>
        <Skill type="Languages" items={resumeData[resumeData.id.languages]} />
        <Skill type="Frameworks" items={resumeData[resumeData.id.frameworks]} />
        <Skill
          type="Developer Tools"
          items={resumeData[resumeData.id.devTools]}
        />
        <Skill type="Libraries" items={resumeData[resumeData.id.libraries]} />
      </Section>
    </div>
  );
}

export { Resume };

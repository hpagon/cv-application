import Header from "./Header";
import Section from "./Section";
import School from "./School";
import Experience from "./Experience";
import Project from "./Project";
import Skill from "./Skill";
import "../styles/Resume.css";
import * as React from "react";

const Resume = React.forwardRef(({ resumeData }, ref) => {
  return (
    <div id="resume" ref={ref}>
      <Header
        fullName={resumeData[resumeData.id.fullName]}
        phoneNumber={resumeData[resumeData.id.phoneNumber]}
        email={resumeData[resumeData.id.email]}
        linkedIn={resumeData[resumeData.id.linkedIn]}
        github={resumeData[resumeData.id.github]}
        linkedInUrl={resumeData[resumeData.id.linkedInUrl]}
        githubUrl={resumeData[resumeData.id.githubUrl]}
      />
      <Section title={"Education"}>
        {resumeData.school.map((schoolId) => {
          return <School key={schoolId} school={resumeData[schoolId]} />;
        })}
      </Section>
      <Section title={"Experience"}>
        {resumeData.experience.map((id) => {
          return <Experience key={id} experience={resumeData[id]} />;
        })}
      </Section>
      <Section title={"Projects"}>
        {resumeData.project.map((id) => {
          return <Project key={id} project={resumeData[id]} />;
        })}
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
});
Resume.displayName = "Resume";

export { Resume };

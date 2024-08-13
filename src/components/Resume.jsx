import Header from "./Header";
import Section from "./Section";
import School from "./School";
import Experience from "./Experience";
import Project from "./Project";
import Skill from "./Skill";

function Resume() {
  return (
    <div>
      <Header />
      <Section title={"Education"}>
        <School />
      </Section>
      <Section title={"Experience"}>
        <Experience />
      </Section>
      <Section title={"Projects"}>
        <Project />
      </Section>
      <Section title={"Technical Skills"}>
        <Skill type="Languages" />
        <Skill type="Frameworks" />
        <Skill type="Developer Tools" />
        <Skill type="Libraries" />
      </Section>
    </div>
  );
}

export { Resume };

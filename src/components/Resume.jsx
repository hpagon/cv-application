import Header from "./Header";
import Section from "./Section";

function Resume() {
  return (
    <div>
      <Header />
      <Section title={"Education"}></Section>
      <Section title={"Experience"}></Section>
      <Section title={"Projects"}></Section>
      <Section title={"Technical Skills"}></Section>
    </div>
  );
}

export { Resume };

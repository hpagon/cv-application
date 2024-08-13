import Dropdown from "./Dropdown";
export default function Editor() {
  return (
    <div>
      <Dropdown title="Personal" key="Personal"></Dropdown>
      <Dropdown title="Education" key="Education"></Dropdown>
      <Dropdown title="Experience" key="Experience"></Dropdown>
      <Dropdown title="Projects" key="Projects"></Dropdown>
      <Dropdown title="Technical Skills" key="Technical Skills"></Dropdown>
    </div>
  );
}

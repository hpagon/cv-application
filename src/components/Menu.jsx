import { emptyData, sampleData } from "../initialData";
import "../styles/Menus.css";

export default function Menu({ handleChange }) {
  return (
    <div id="menu">
      <div>
        <h1>CV Builder</h1>
        <div>
          <button
            onClick={() => {
              handleChange(emptyData);
            }}
          >
            Reset
          </button>
          <button
            onClick={() => {
              handleChange(sampleData);
            }}
          >
            Fill
          </button>
          <button>Download</button>
        </div>
      </div>
    </div>
  );
}

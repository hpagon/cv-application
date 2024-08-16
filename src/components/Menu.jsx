import { emptyData, sampleData } from "../initialData";

export default function Menu({ handleChange }) {
  return (
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
  );
}

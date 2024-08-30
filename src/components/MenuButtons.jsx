import { emptyData, sampleData } from "../initialData";
export default function MenuButtons({ handleChange, handlePrint }) {
  return (
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
      <button onClick={handlePrint}>Download</button>
    </div>
  );
}

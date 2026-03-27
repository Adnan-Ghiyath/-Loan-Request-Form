// import "./Root.css";

export default function Submit({ FIS = true, onClick }) {
  return (
    <div className="submit-wrap">
      <button
        disabled={FIS}
        id="1"
        className="submit-btn"
        type="submit"
        onClick={onClick}
      >
        Submit
      </button>
    </div>
  );
}

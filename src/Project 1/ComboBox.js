// import "./Root.css";

export default function ComboBox({ name, value, onChange }) {
  const salaries = [
    { id: 500, value: "less than 500$" },
    { id: 1000, value: "500$ - 1000$" },
    { id: 2000, value: "1000$ - 3000$" },
    { id: 4000, value: "3000$ - 5000$" },
    { id: 5000, value: "More than 5000$" },
  ];

  return (
    <div className="field">
      <label htmlFor="salary">Salary</label>
      <select id="salary" name={name} value={value} onChange={onChange}>
        <option value="">-- Select Salary --</option>
        {salaries.map((i) => (
          <option key={i.id} value={i.id}>
            {i.value}
          </option>
        ))}
      </select>
    </div>
  );
}

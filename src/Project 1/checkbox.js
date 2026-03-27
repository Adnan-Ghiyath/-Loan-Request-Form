// import "./Root.css";

export default function Checkbox({
  name,
  label = "Are you an employee?",
  checked,
  onChange,
}) {
  return (
    <div className="checkbox-field">
      <label>{label}</label>

      <div
        className={`checkbox-wrap ${checked ? "checked" : "unchecked"}`}
        id="employeeCheck"
        onClick={() =>
          onChange({ target: { name, type: "checkbox", checked: !checked } })
        } // ✅ هنا
      >
        <input type="checkbox" id="employee" checked={checked} readOnly />

        <svg viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
    </div>
  );
}

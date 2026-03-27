// import "./Root.css";

export default function Field({
  name,
  placeholder,
  For,
  value,
  onChange,
  error,
}) {
  return (
    <div className="field">
      <label htmlFor={For}>{name}:</label>
      <input
        maxLength={name === "Phone" ? 12 : undefined}
        type={name === "Phone" ? "numeric" : "text"}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{ borderColor: error ? "red" : "" }} // ✅ حدود حمراء عند الخط
      />
      {error && <span className="error-msg">{error}</span>}{" "}
      {/* ✅ رسالة الخطأ */}
    </div>
  );
}

export function FieldAge({
  name,
  placeholder,
  For,
  Min,
  Max,
  value,
  onChange,
  error,
}) {
  return (
    <div className="field">
      <label htmlFor={For}>{name}:</label>
      <input
        type="number"
        name={name} // ✅ أضف هذا
        min={Min}
        max={Max}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{ borderColor: error ? "red" : "" }} // ✅ حدود حمراء عند الخط
      />
      {error && <span className="error-msg">{error}</span>}{" "}
      {/* ✅ رسالة الخطأ */}
    </div>
  );
}

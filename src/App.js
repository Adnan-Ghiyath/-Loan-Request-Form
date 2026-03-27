import { useState } from "react";
import Card from "../src/Project 1/Card";
import Field, { FieldAge } from "../src/Project 1/field";
import Checkbox from "../src/Project 1/checkbox";
import ComboBox from "../src/Project 1/ComboBox";
import Submit from "../src/Project 1/Submit";
import "../src/Project 1/pop.css";
import "../src/Project 1/Root.css";

function App() {
  const [formData, setFormData] = useState({
    Name: "",
    Phone: "",
    Age: "",
    isChecked: false,
    comboValue: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target; // name بحرف صغير
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const [showPopup, setShowPopup] = useState(false);

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (formData.Phone.length < 10) {
      newErrors.Phone = "The mobile number must be 10 digits or more ❌ ❌";
    }
    if (formData.Age < 18 || formData.Age > 99) {
      newErrors.Age = "Age must be between 18 and 99 ❌";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return; // ✅ وقف الإرسال إذا في أخطاء
    }

    setErrors({});
    setShowPopup(true);
    setTimeout(() => {
      window.location.reload();
    }, 2500);
    console.log("The Data:", formData);
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <Field
          For="Name" // للـ label والـ id
          name="Name" // هذا هو الذي سيستخدمه handleChange (يجب أن يكون name بحرف صغير)
          value={formData.Name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
        <Field
          name="Phone"
          value={formData.Phone}
          onChange={handleChange}
          placeholder="Enter your phone"
          error={errors.Phone}
        />
        <FieldAge
          Min="18"
          Max="99"
          name="Age"
          value={formData.Age}
          onChange={handleChange}
          placeholder="Enter your age"
          error={errors.Age}
        />
        <Checkbox
          name="isChecked"
          checked={formData.isChecked}
          onChange={handleChange}
        />
        <ComboBox
          name="comboValue"
          value={formData.comboValue}
          onChange={handleChange}
        />
        <Submit
          FIS={
            (formData.Name === "") |
            (formData.Age === "") |
            (formData.Phone === "") |
            (formData.isChecked === false) |
            (formData.comboValue === "")
          }
          onClick={handleSubmit}
        />
      </form>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>✅ تم الإرسال بنجاح!</h2>
            <p>شكراً لك، تم استلام بياناتك.</p>
            <button onClick={() => setShowPopup(false)}>إغلاق</button>
          </div>
        </div>
      )}
    </Card>
  );
}

export default App;

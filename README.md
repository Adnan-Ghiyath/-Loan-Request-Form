# 🏦 Loan Request Form

A clean and interactive loan application form built with **React**, featuring real-time validation, custom UI components, and a modern dark theme.

---

## ✨ Features

- **Form Validation** — inline error messages with red borders on invalid fields
- **Custom Checkbox** — fully styled toggle with SVG checkmark animation
- **Salary ComboBox** — dropdown with predefined salary ranges
- **Submit Control** — button stays disabled until form is valid
- **Success Popup** — confirmation overlay after submission
- **Responsive Design** — works across screen sizes

---

## 🧩 Project Structure

```
src/
├── Card.js         # Layout wrapper with title and divider
├── field.js        # Reusable text input + age input (with validation display)
├── ComboBox.js     # Salary range dropdown
├── checkbox.js     # Custom animated checkbox
├── Submit.js       # Submit button with disabled state
├── Root.css        # Global styles and dark theme variables
└── pop.css         # Popup overlay styles
```

---

## 🛠️ Built With

- [React](https://reactjs.org/) — component-based UI
- CSS Variables — for consistent theming
- Custom SVG — for the animated checkbox icon

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/your-username/loan-request-form.git

# Navigate to the project
cd loan-request-form

# Install dependencies
npm install

# Start the development server
npm start
```

---

## 📋 Form Fields

| Field      | Type     | Validation                  |
|------------|----------|-----------------------------|
| Full Name  | Text     | Required                    |
| Phone      | Numeric  | Required, max 12 characters |
| Age        | Number   | Min / Max range             |
| Salary     | Dropdown | Required selection          |
| Employee   | Checkbox | Toggle yes/no               |

---

## 🎨 Theme

The UI uses a deep purple dark theme with neon accents defined via CSS custom properties:

```css
--bg: #1a0a6b;
--accent: #ff2d6b;
--accent2: #5b3fff;
```

---

## 🌱 What I Learned

This was my first React project. Through it I practiced:

- Breaking UI into reusable components
- Controlled inputs with `useState`
- Passing props and handling events across components
- Form validation logic
- CSS custom properties and animations

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

// import "./Root.css";
export default function Card({ children }) {
  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Requesting a Loan</h1>
        <div className="divider"></div>
        {children}
      </div>
    </div>
  );
}

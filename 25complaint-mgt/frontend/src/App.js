import React from "react";
import ComplaintForm from "./ComplaintForm";
import ComplaintList from "./ComplaintList";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Complaint Management System</h1>
      <ComplaintForm />
      <hr />
      <ComplaintList />
    </div>
  );
}

export default App;
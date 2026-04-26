import React from "react";
import FeedbackForm from "./FeedbackForm";
import FeedbackList from "./FeedbackList";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Student Feedback System</h1>
      <FeedbackForm />
      <hr />
      <FeedbackList />
    </div>
  );
}

export default App;
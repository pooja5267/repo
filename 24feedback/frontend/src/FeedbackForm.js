import React, { useState } from "react";
import axios from "axios";

function FeedbackForm() {
  const [form, setForm] = useState({
    name: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/feedback", form);
    alert("Feedback submitted");
    setForm({ name: "", subject: "", message: "" });
  };

  return (
    <form onSubmit={submitForm}>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required /><br /><br />
      <input name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} required /><br /><br />
      <textarea name="message" placeholder="Feedback" value={form.message} onChange={handleChange} required /><br /><br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FeedbackForm;
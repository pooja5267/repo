import React, { useState } from "react";
import axios from "axios";

function ComplaintForm() {
  const [form, setForm] = useState({
    name: "",
    issue: "",
    category: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/complaints", form);
    alert("Complaint submitted");
    setForm({ name: "", issue: "", category: "" });
  };

  return (
    <form onSubmit={submitForm}>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required /><br /><br />

      <textarea name="issue" placeholder="Issue" value={form.issue} onChange={handleChange} required /><br /><br />

      <input name="category" placeholder="Category" value={form.category} onChange={handleChange} required /><br /><br />

      <button type="submit">Submit Complaint</button>
    </form>
  );
}

export default ComplaintForm;
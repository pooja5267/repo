import React, { useState } from "react";
import axios from "axios";

function NoteForm() {
  const [form, setForm] = useState({
    subject: "",
    title: "",
    link: "",
    description: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/notes", form);
    alert("Note added");
    setForm({ subject: "", title: "", link: "", description: "" });
  };

  return (
    <form onSubmit={submitForm}>
      <input name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} required /><br /><br />
      <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required /><br /><br />
      <input name="link" placeholder="Link (optional)" value={form.link} onChange={handleChange} /><br /><br />
      <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange}></textarea><br /><br />
      <button type="submit">Add Note</button>
    </form>
  );
}

export default NoteForm;
import React, { useState } from "react";
import axios from "axios";

function ItemForm() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    location: "",
    contact: "",
    type: "Lost"
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/items", form);
    alert("Item submitted");
    setForm({ name: "", description: "", location: "", contact: "", type: "Lost" });
  };

  return (
    <form onSubmit={submitForm}>
      <input name="name" placeholder="Item Name" value={form.name} onChange={handleChange} required /><br /><br />

      <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} required /><br /><br />

      <input name="location" placeholder="Location" value={form.location} onChange={handleChange} required /><br /><br />

      <input name="contact" placeholder="Contact Info" value={form.contact} onChange={handleChange} required /><br /><br />

      <select name="type" value={form.type} onChange={handleChange}>
        <option>Lost</option>
        <option>Found</option>
      </select><br /><br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default ItemForm;
import React, { useEffect, useState } from "react";
import axios from "axios";

function NoteList() {
  const [notes, setNotes] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    const res = await axios.get("http://localhost:5000/notes");
    setNotes(res.data);
  };

  const filteredNotes = filter
    ? notes.filter(n => n.subject.toLowerCase() === filter.toLowerCase())
    : notes;

  return (
    <div>
      <h2>All Notes</h2>

      <input
        placeholder="Filter by subject"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      /><br /><br />

      {filteredNotes.map((n) => (
        <div key={n._id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <h3>{n.title}</h3>
          <p><strong>Subject:</strong> {n.subject}</p>
          <p>{n.description}</p>

          {n.link && (
            <a href={n.link} target="_blank" rel="noreferrer">View Resource</a>
          )}
        </div>
      ))}
    </div>
  );
}

export default NoteList;
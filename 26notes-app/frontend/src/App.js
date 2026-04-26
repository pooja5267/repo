import React from "react";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Notes Sharing App</h1>
      <NoteForm />
      <hr />
      <NoteList />
    </div>
  );
}

export default App;
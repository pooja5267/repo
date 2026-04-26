import React from "react";
import ItemForm from "./ItemForm";
import ItemList from "./ItemList";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Lost & Found System</h1>
      <ItemForm />
      <hr />
      <ItemList />
    </div>
  );
}

export default App;
import React, { useEffect, useState } from "react";
import axios from "axios";

function ItemList() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const res = await axios.get("http://localhost:5000/items");
    setItems(res.data);
  };

  const filteredItems = filter
    ? items.filter(i => i.type === filter)
    : items;

  return (
    <div>
      <h2>All Items</h2>

      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="">All</option>
        <option value="Lost">Lost</option>
        <option value="Found">Found</option>
      </select><br /><br />

      {filteredItems.map((i) => (
        <div key={i._id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <h3>{i.name}</h3>
          <p><strong>Type:</strong> {i.type}</p>
          <p>{i.description}</p>
          <p><strong>Location:</strong> {i.location}</p>
          <p><strong>Contact:</strong> {i.contact}</p>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
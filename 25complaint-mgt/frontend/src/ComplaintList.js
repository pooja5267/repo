import React, { useEffect, useState } from "react";
import axios from "axios";

function ComplaintList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axios.get("http://localhost:5000/complaints");
    setData(res.data);
  };

  const markResolved = async (id) => {
    await axios.put(`http://localhost:5000/complaints/${id}`);
    fetchData();
  };

  return (
    <div>
      <h2>All Complaints</h2>

      {data.map((item) => (
        <div key={item._id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <h3>{item.name}</h3>
          <p><strong>Category:</strong> {item.category}</p>
          <p>{item.issue}</p>
          <p>Status: {item.status}</p>

          {item.status === "Pending" && (
            <button onClick={() => markResolved(item._id)}>Mark Resolved</button>
          )}
        </div>
      ))}
    </div>
  );
}

export default ComplaintList;
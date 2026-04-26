import React, { useEffect, useState } from "react";
import axios from "axios";

function FeedbackList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axios.get("http://localhost:5000/feedback");
    setData(res.data);
  };

  return (
    <div>
      <h2>All Feedback</h2>

      {data.map((item, index) => (
        <div key={index} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <h3>{item.name}</h3>
          <p><strong>{item.subject}</strong></p>
          <p>{item.message}</p>
        </div>
      ))}
    </div>
  );
}

export default FeedbackList;
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [formData, setFormData] = useState([]);

  function fetchData() {
    axios
      .get("http://localhost:3000/posts")
      .then((res) => setFormData(res.data));
  }
  useEffect(fetchData, []);

  return (
    <div className="container">
      <h1>Lista Spesa</h1>
      <ul>
        {formData.map((item, index) => (
          <div key={index} className="list-container">
            <li>
              <strong>{item.titolo}</strong>
              <p>{item.immagine}</p> {item.contenuto}
              <p>{item.tags}</p>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
export default App;

import axios from "axios";
import { useState, useEffect } from "react";

const initialData = {
  immagine: "",
  descrizione: "",
  ingredienti: "",
};

function Menu() {
  const [formData, setFormData] = useState([]);
  const [users, setUsers] = useState(initialData);

  function fetchData() {
    axios
      .get("http://localhost:3000/posts")
      .then((res) => setFormData(res.data));
  }

  const handleFormData = (fieldName, value) => {
    setUsers((prev) => {
      return { ...prev, [fieldName]: value };
    });
  };

  useEffect(fetchData, []);

  const handleSubmitForm = (event) => {
    event.preventDefault();
    axios.post("http://localhost:3000/posts", users).then((response) => {
      setFormData((prev) => [...prev, response.data]);
      setUsers(initialData);
    });
  };

  //funzione per rimuovere un "prodotto"
  function handleDelete(id) {
    axios
      .delete(`http://localhost:3000/posts/${id}`)
      .then(() =>
        setFormData((current) => current.filter((item) => item.id !== id))
      );
  }

  return (
    <div className="container">
      <h1>Lista Spesa</h1>
      <ul>
        {formData.map((item, index) => (
          <div key={index} className="list-container">
            <li>
              <img src={item.immagine} alt="" style={{ width: "100px" }} />
              <div>{item.descrizione}</div>
              <p>
                #
                {Array.isArray(item.ingredienti)
                  ? item.ingredienti.join("#")
                  : item.ingredienti}
              </p>
              <div className="btn-delete-container">
                <button onClick={() => handleDelete(item.id)}>🗑 Elimina</button>
              </div>
            </li>
          </div>
        ))}
      </ul>
      <hr />
      <h2>Aggiungi Prodotto</h2>
      <form onSubmit={handleSubmitForm}>
        <input
          id="immagine"
          type="text"
          placeholder="Insersci url immagine"
          value={users.immagine}
          onChange={(event) => handleFormData("immagine", event.target.value)}
          required
        />
        <input
          id="descrizione"
          type="text"
          placeholder="Insersci la descrizioe"
          value={users.descrizione}
          onChange={(event) =>
            handleFormData("descrizione", event.target.value)
          }
          required
        />
        <input
          id="ingredienti"
          type="text"
          placeholder="Insersci gli ingredienti"
          value={users.ingredienti}
          onChange={(event) =>
            handleFormData("ingredienti", event.target.value)
          }
          required
        />
        <button type="submit">Invia</button>
      </form>
    </div>
  );
}
export default Menu;

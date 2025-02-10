import axios from "axios";
import { useState, useEffect } from "react";

const initialData = {
  immagine: "",
  descrizione: "",
  ingredienti: "",
};

function Menu() {
  const [menu, setMenu] = useState([]);
  const [users, setUsers] = useState(initialData);

  function fetchData() {
    axios
      .get("http://localhost:3000/posts")
      .then((res) => setMenu(res.data.default));
  }

  const handlemenu = (fieldName, value) => {
    setUsers((prev) => {
      return { ...prev, [fieldName]: value };
    });
  };

  useEffect(fetchData, []);

  const handleSubmitForm = (event) => {
    event.preventDefault();
    axios.post("http://localhost:3000/posts", users).then((response) => {
      setMenu((prev) => [...prev, response.data]);
      setUsers(initialData);
    });
  };

  //funzione per rimuovere un "prodotto"
  function handleDelete(id) {
    axios
      .delete(`http://localhost:3000/posts/${id}`)
      .then(() =>
        setMenu((current) => current.filter((item) => item.id !== id))
      );
  }

  return (
    <div className="body">
      <div className="menu-container">
        <h1 className="menu-title">Il Nostro Menù</h1>
        <div className="menu-grid">
          {menu.map((pizza) => (
            <div key={pizza.id} className="menu-item">
              <img
                src={`http://localhost:3000${pizza.image}`}
                alt={pizza.name}
                className="menu-img"
              />
              <h2>{pizza.name}</h2>
              <p>{pizza.ingredients}</p>
              <span className="menu-price">{pizza.price}</span>
              <div className="btn-delete-container">
                <button onClick={() => handleDelete(pizza.id)}>
                  🗑 Elimina
                </button>
              </div>
            </div>
          ))}
        </div>

        <h2>Aggiungi Pizza</h2>
        <form onSubmit={handleSubmitForm}>
          <input
            type="text"
            placeholder="Inserisci URL immagine"
            value={users.image}
            onChange={(event) => handlemenu("image", event.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Inserisci il nome della pizza"
            value={users.name}
            onChange={(event) => handlemenu("name", event.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Inserisci gli ingredienti"
            value={users.ingredients}
            onChange={(event) => handlemenu("ingredients", event.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Inserisci il prezzo"
            value={users.price}
            onChange={(event) => handlemenu("price", event.target.value)}
            required
          />
          <button type="submit">Aggiungi Pizza</button>
        </form>
      </div>
    </div>
  );
}

export default Menu;

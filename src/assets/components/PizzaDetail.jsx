import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function PizzaDetail() {
  const [pizza, setPizza] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/posts/${id}`)
      .then((response) => setPizza(response.data))
      .catch((error) => {
        console.error("Error fetching pizza details:", error);
        navigate("/menu");
      });
  }, [id, navigate]);

  if (!pizza) return <div>Caricamento...</div>;

  return (
    <div className="pizza-detail-container">
      <button className="back-button" onClick={() => navigate("/menu")}>
        ← Torna al Menù
      </button>
      <div className="pizza-detail-content">
        <img
          src={`http://localhost:3000${pizza.image}`}
          alt={pizza.name}
          className="pizza-detail-image"
        />
        <div className="pizza-detail-info">
          <h1>{pizza.name}</h1>
          <p className="pizza-ingredients">{pizza.ingredients}</p>
          <p className="pizza-price">Prezzo: {pizza.price}</p>
        </div>
      </div>
    </div>
  );
}

export default PizzaDetail;

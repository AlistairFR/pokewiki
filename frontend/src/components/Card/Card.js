import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import '../../Colors.scss';
import './Card.module.scss'

function Card({ results }) {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    if (results && results.length > 0) {
      async function fetchData() {
        const cards = await Promise.all(
          results.map(async (x) => {
            const response = await fetch(x.url);
            const data = await response.json();
            return {
              name: x.name,
              url: x.url,
              spriteUrl: data.sprites.front_default,
              id: data.id
            };
          })
        );
        setCardsData(cards);
      }

      fetchData();
    }
  }, [results]);

  return (
    <div className="row">
      {cardsData.map((card) => (
        <div
          key={card.id}
          className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark"
        >
          <div className="card">
            <Link className="text-decoration-none text-black" to={`/pokemon/${card.id}`}>
                <div className="card-body">
                    <img className="card-img-top" src={card.spriteUrl} alt={`Sprite for ${card.name}`} />
                    <h4 className="text-capitalize text-center">{card.name}</h4>
                </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;


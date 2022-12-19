import React from "react";
import CARDELEMENT from "./card.json";

function Card({ title, children }) {
  return (
    <div className="card">
      {CARDELEMENT &&
        CARDELEMENT.map((item) => (
          <div key={item.id}>
            <a href={item.link}>
              <img src={item.image} alt="Monkey.png" />
            </a>
            <div className="text-container">
              <p> {item.description}</p>
            </div>
          </div>
        ))}
    </div>
  );
}
export default Card;

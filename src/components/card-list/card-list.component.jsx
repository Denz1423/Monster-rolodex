import React from "react";
import Card from "../card/card.component";
import './card-list.styles.css'

export default function CardList({ monsters }) {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <Card key={monster.id} monster={monster} />;
      })}
    </div>
  );
}

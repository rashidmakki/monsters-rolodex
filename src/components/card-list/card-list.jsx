import React from "react";
import { Card } from "../card/card";

import "./card-list.css";

export const CardList = props => {
  return (
    <div className="cardList">
      {props.monster.map(monster => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};

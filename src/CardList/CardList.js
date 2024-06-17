import React from "react";
import Card from "../Card/Card";

const CardList = ({ Data }) => {

  return (
    <div className="cardlist">
      {Data.map((person) => (
        <Card person={person} key={person.id} />
      ))}
    </div>
  );
};

export default CardList;

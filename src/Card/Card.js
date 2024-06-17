import React from "react";

const Card = ({ person }) => {
  return (
    <div key={person.id} className="card">
      <img src={`https://robohash.org/${person.id}&size=180x180`} alt="users" />
      <h3>{person.name}</h3>
      <h6>{person.email}</h6>
    </div>
  );
};

export default Card;

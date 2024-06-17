import React from "react";

const SearcBoxComponent = ({ handleChange }) => {
  return (
    <input type="search" placeholder="search-users" onChange={handleChange} className="search" />
  );
};

export default SearcBoxComponent;

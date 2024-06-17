import React, { useEffect, useState } from "react";
import CardLIst from "./CardList/CardList";
import SearcBoxComponent from "./SeachBox/SearcBox-Component";
import "./index.css"

const App = () => {
  const [users, setUsers] = useState([]);
  const [searchData, setSearch] = useState("");

  const fetchApi = async () => {
    const people = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const response = await people.json();
    setUsers(response);
  };
  const filteredData = users.filter((user) =>
    user.name.toLowerCase().includes(searchData.toLowerCase())
  );
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    fetchApi();
  }, []);
  console.log(searchData);
  console.log(users);
  return (
    <div>
      <SearcBoxComponent handleChange={handleChange} />
      <CardLIst Data={filteredData} />
    </div>
  );
};

export default App;

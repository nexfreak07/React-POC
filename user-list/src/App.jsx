import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [user, setNewUser] = useState([]);
  const addUserHandler = (newUser) => {
    setNewUser((prevUsers) => {
      return [...prevUsers, newUser];
    });
  };
  return (
    <div>
      <AddUser onAdd={addUserHandler} />
      <UserList users={user}></UserList>
    </div>
  );
}

export default App;

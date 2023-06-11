import React from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

const Adduser = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  // Below Use State is used to handle Error Module

  const nameHandler = (event) => {
    setName(event.target.value);
  };

  const ageHandler = (event) => {
    setAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();

    if (name.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Name and Age Error",
        message: "Enter valid name and age"
      });
      return;
    }
    if (+age < 1) {
      // + is to convert a string to a number, as JSX fetches strings
      setError({
        title: "Age Error",
        message: "Enter valid age > 0"
      })
      return;
    }
    const newUser = {
      Name: name,
      Age: +age,
    };
    props.onAdd(newUser);

    setName("");
    setAge("");
  };

  const errorHandler =  () => {
    setError(null);
    

    // Adding My Extra Feature -> So that on clicking Okay Everything is cleared automatically
    setName("");
    setAge("");
  }
  return (
    <div>
      { error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">User Name</label>
          <input
            id="username"
            type="text"
            onChange={nameHandler}
            value={name}
          ></input>
          <label htmlFor="username">Age (in Years)</label>
          <input
            id="age"
            type="number"
            onChange={ageHandler}
            value={age}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default Adduser;

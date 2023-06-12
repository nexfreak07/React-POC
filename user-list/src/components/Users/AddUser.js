import React, { Fragment } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import { useState, useRef } from "react";
import ErrorModal from "../UI/ErrorModal";

const Adduser = (props) => {
  // const [name, setName] = useState("");
  // const [age, setAge] = useState("");
  const [error, setError] = useState();

  const nameRef = useRef();
  const ageRef = useRef();

  // Below Use State is used to handle Error Module

  // const nameHandler = (event) => {
  //   setName(event.target.value);
  // };

  // const ageHandler = (event) => {
  //   setAge(event.target.value);
  // };

  const addUserHandler = (event) => {
    event.preventDefault();

    const name = nameRef.current.value;
    const age = ageRef.current.value;

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
      Age: +age
    };
    props.onAdd(newUser);
    nameRef.current.value = '';
    ageRef.current.value = '';
  };

  const errorHandler =  () => {
    setError(null);
    

    // Adding My Extra Feature -> So that on clicking Okay Everything is cleared automatically
   nameRef.current.value = '';
   ageRef.current.value = ''; 
  }
  return (
    <Fragment>
      { error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">User Name</label>
          <input
            id="username"
            type="text"
            // onChange={nameHandler}
            // value={name}
            ref={nameRef}
          ></input>
          <label htmlFor="username">Age (in Years)</label>
          <input
            id="age"
            type="number"
            // onChange={ageHandler}
            // value={age}
            ref={ageRef}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default Adduser;

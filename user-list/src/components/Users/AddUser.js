import React from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css';
import Button from "../UI/Button";
import { useState } from "react";

const Adduser = (props) => {

    const [name, setName] = useState("");
    const [age, setAge] = useState(""); 

    const nameHandler = (event) => {
        setName(event.target.value);
    }

    const ageHandler = (event) => {
        setAge(event.target.value);
    }

    const addUserHandler = (event) => {
        event.preventDefault();

        if(name.trim().length === 0 || age.trim().length === 0 )
        {
            return;
        }
        if(+age < 1) // + is to convert a string to a number, as JSX fetches strings
        {
            return;
        }
        const newUser = {
            Name : name,
            Age : +age
        }
        props.onAdd(newUser);
        
        setName("");
        setAge("");

    }
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">User Name</label>
        <input id="username" type="text" onChange={nameHandler} value={name}></input>
        <label htmlFor="username">Age (in Years)</label>
        <input id="age" type="number" onChange={ageHandler} value={age}></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default Adduser;

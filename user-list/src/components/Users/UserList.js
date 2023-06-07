import React from "react";
import classes from "./UserList.module.css";
import Card from "../UI/Card";

const UserList = (props) => {
  return (
    <Card className={classes.users}>
    <ul>


        {/* Keep the map function in mind you dont use props but rather use the paramerter argument to access the data */}
      {props.users.map( (users) => 
        <li key={users.id}>
          {" "}
          {users.Name} Age : ({users.Age} in Years){" "}
        </li>
      )}
    </ul>
    </Card>
  );
};

export default UserList;

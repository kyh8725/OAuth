import React from "react";
import AuthButton from "../AuthButton";

export default (props) => {
  console.log(props);
  return (
    <>
    <AuthButton />
      <div>My Cart</div>      
      <h1>{props.user.username || props.user.displayName}</h1>
    </>
  );
};

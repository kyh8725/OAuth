import React from "react";

export default (props) => {
  console.log(props);
  return (
    <>
      <div>Protected Page</div>
      <h1>{props.user.username || props.user.displayName}</h1>
    </>
  );
};

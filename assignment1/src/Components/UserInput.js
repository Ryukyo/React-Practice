import React from "react";

export default function userInput({ change, value }) {

  return (
    <input
      type="text"
      className="userInput"
      onChange={change}
      value={value}
    ></input>
  );
}

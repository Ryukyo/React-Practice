import React from "react";

export default function userOutput({ username }) {
  return (
    <div>
      <p className="para-one">Username: </p>
      <p className="para-two">{username}</p>
    </div>
  );
}

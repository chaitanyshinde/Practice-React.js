import React, { useState, useContext } from "react";
import UserContext from "../context/userContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <h1>Pls Login</h1>;
  return (
    <div>
      <h1> Welcome {user.username}</h1>
    </div>
  );
}

export default Profile;

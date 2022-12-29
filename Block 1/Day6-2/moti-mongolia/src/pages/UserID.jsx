import React from "react";
import { Link, useParams } from "react-router-dom";
export const UserID = () => {
  const params = useParams();
  return (
    <div>
      <h1>User ID</h1>
      <Link to="/user">click here</Link>
      <p>{params.userID}</p>
    </div>
  );
};

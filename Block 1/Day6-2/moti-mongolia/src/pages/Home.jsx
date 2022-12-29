import React from "react";
import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/Login">click here</Link> <br/><br/>
      <Link to="/UserID">click here</Link> <br/><br/>
      <Link to="/SignUp">click here</Link>
    </div>
  );
};

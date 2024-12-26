import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header">
      <div>
        <h2>ToDo app</h2>
        <article>
          <Link to={"/"}>Home</Link>
          <Link to={"/profile"}>Profile</Link>
          <button className="btn">log in</button>
        </article>
      </div>
    </nav>
  );
};

export default Header;

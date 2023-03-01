import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar">
      <h2><Link to="./">Home</Link></h2>
      <h2><Link to="./Elements">Elements</Link></h2>
      <h2><Link to="./Clues">Clues</Link></h2>
    </div>
  );
};

export default Navbar;
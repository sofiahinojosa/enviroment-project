import React, { useState } from "react";
import Hamburger from "./Hamburger";
import "./Hamburger.css";
import { Link } from "react-router-dom";
import "./App.css";
 
export default function Sidebar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
 
  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };
 
  return (
    <div className="Sidebar">
      <div className="hamburger" onClick={toggleHamburger}>
        <Hamburger />
      </div>
        <div className="sidenav">
          <div className="links">
            <Link to="/">
              <h2>Pgw 🌎🌱</h2>
            </Link>
            <hr />
            <h3>Topics :)</h3>
            <Link to="/veganism">- Veganism</Link>
            <Link to="/trees">- Trees</Link>
            <Link to="/donations">- Donations</Link>
            <Link to="/pollution">- Pollution</Link>
            <Link to="/ecofriendly">- Eco-friendly</Link>
          </div>
        </div>
    </div>
  );
}
 
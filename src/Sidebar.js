import React, { useState } from "react";
import Hamburger from "./Hamburger";
import "./Hamburger.css";
import { Link } from "react-router-dom";
import "./App.css";
 
export default function Sidebar() {
    window.addEventListener('resize', function(event) {
        if (window.innerWidth < 767) {
            document.getElementById('#v').innerText = '-V';
        }, true);
    }
 
  return (
    <div className="Sidebar">
        <div className="sidenav">
          <div className="links">
            <Link to="/">
              <h2>Pgw 🌎🌱</h2>
            </Link>
            <hr />
            <h3>Topics :)</h3>
            <Link id="v" to="/veganism">- Veganism</Link>
            <Link to="/trees">- Trees</Link>
            <Link to="/donations">- Donations</Link>
            <Link to="/pollution">- Pollution</Link>
            <Link to="/ecofriendly">- Eco-friendly</Link>
          </div>
        </div>
    </div>
  );
}
 
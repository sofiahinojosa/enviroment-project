import React from "react";
import { Link } from "react-router-dom"; //add Routes, Route if needed
import "./App.css"

export default function Sidebar() {
    return(
        <div className="Sidebar">
            <div class="sidenav">
                <Link to="/"><h2>Prettygreenworld</h2></Link>
                <hr />
                <h3>Topics :)</h3>
                <Link to="/veganism">- Veganism</Link>
                <Link to="/trees">- Trees</Link>
                <Link to="/donations">- Donations</Link>
                <Link to="/pollution">- Pollution</Link>
                <Link to="/ecofriendly">- Eco-friendly</Link>
            </div>
        </div>
    )
}
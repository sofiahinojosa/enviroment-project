import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css"

export default function Sidebar() {
    return(
        <div className="Sidebar">
            <div class="sidenav">
                <a><Link to="/"><h2>Enviroment Project</h2></Link></a>
                <hr />
                <h3>Topics :)</h3>
                <a><Link to="/veganism">Veganism</Link></a>
                <a><Link to="/trees">Trees</Link></a>
                <a><Link to="/donations">Donations</Link></a>
                <a><Link to="/pollution">Pollution</Link></a>
                <a><Link to="/ecofriendly">Eco-friendly</Link></a>
            </div>
        </div>
    )
}
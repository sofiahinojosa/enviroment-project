import React, { useState }  from "react";
import "./Hamburger.css";
import { Link } from "react-router-dom"; 
import "./App.css"

export default function Sidebar() {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () =>{
        setHamburgerOpen(!hamburgerOpen)
    }

    return(
        <div className="Sidebar">
            <div className="sidenav">
                    <div className="links">
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
        </div>
    )
}
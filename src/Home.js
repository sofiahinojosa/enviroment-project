import React, { useState }  from "react";
import Hamburger from "./Hamburger";
import "./Hamburger.css";
import "./App.css"
//import { BrowserRouter } from "react-router-dom";
//import { Routes, Route, Link } from "react-router-dom";

export default function Home() {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () =>{
        setHamburgerOpen(!hamburgerOpen)
    }
    return(
        <div className="Home">
            <div className="hamburger" onClick={toggleHamburger}>
                        <Hamburger isOpen={hamburgerOpen}/>
                    </div>
            <div class="main">
  <h2>Prettygreenworld :]</h2>
  <h4>“The Earth is a fine place and worth fighting for”</h4>
  <img class="circles" alt="circles" src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/025/208/original/Screen_Shot_2022-01-17_at_6.58.27_p.m.-removebg-preview.png?1642648045" />
</div>
        </div>
    )
}
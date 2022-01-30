import React, { useState }  from "react";
import Hamburger from "./Hamburger";
import "./Hamburger.css";
import "./App.css";
import "./Veganism.css";
import Card from "./Card"
import "./Card.css";

export default function Trees() {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () =>{
        setHamburgerOpen(!hamburgerOpen)
    }
    return(
        <div className="Veganism">
            <div className="main">
            <div className="hamburger" onClick={toggleHamburger}>
                        <Hamburger isOpen={hamburgerOpen}/>
                    </div>
            <h1>Trees 🌳</h1>
            <p>Trees are the <strong>longest living species on earth.</strong> It’s important that all woodlands, 
            rainforests and trees found in urban places (for example parks) are preserved and sustainably managed across the world.</p>
                <div className="grid-container">
                <Card src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/025/971/original/Screen_Shot_2022-01-29_at_10.42.19_p.m..png?1643517746" text="Did you know tree rings can predict climate change?" /> 
                <Card src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/025/975/original/Screen_Shot_2022-01-29_at_10.43.37_p.m..png?1643517823" text="Planting trees can save you up to 25% on your energy bills." />
                </div>
            <ul>
                <h5>Did you know...</h5>
                <li>Trees act as a physical filter</li>
                <li>Trees and shrubs have medicinal properties</li>
                <li>They absorb carbon dioxide as they grow</li>
                <li>Reduce wind speeds and cool the air</li>
                <li>Help prevent flooding and soil erosion</li>
                <li>Stress levels go down withing minutes of being surrouded by trees</li>
            </ul>

            <p>People have many solutions to this issue, <strong>deforestation.</strong> Some include
             shipping everyone to the Moon or crazy ideas like that. The real solution is 
             to just <strong>stop cutting trees!</strong> If we didn't have trees, 
            we would not be able survive because the <strong>air would be unhealthy for breathing.</strong> We would 
            have to invent gas masks that filter the little oxygen that we have left. Without 
            trees, there also <strong>won't be any products you can get from them.</strong> Let's do something about this now!</p>
            </div>
        </div>
    )
}
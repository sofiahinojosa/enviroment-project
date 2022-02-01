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
            <p>Trees are the <strong>longest living species on earth.</strong> It’s very important that trees found in urban places
             (for example parks) and everywhere else are preserved across the world.</p>
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

            <p>Cutting trees has led to this issue called <strong>deforestation.</strong> People
                have proposed solutions such as sending everyone to the 
                moon, but there only real solution is to stop cutting trees! We 
                need trees to have <strong>healthy air to breathe.</strong> Lets do something about it now :)</p>
            <a class="button1" target="_blank" rel="noreferrer" href="https://unsplash.com/s/photos/tree">Cool tree pics here :D</a>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/UnwMq1gGjhk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    )
}
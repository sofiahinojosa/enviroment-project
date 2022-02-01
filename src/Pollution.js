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
            <h1>Pollution 🏭</h1>
            <p>Pollution is the "introduction of harmful materials into the environment". They can be made by humans (trash or runoff) and these are called pollutants. They can also be natural (volcanic ash). Pollutants damage the quality of water, air, and land.</p>
                <div className="grid-container">
                <Card src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/025/966/original/Screen_Shot_2022-01-29_at_10.03.20_p.m..png?1643515410" text="Did you know that over 1 million seabirds and 100,000 sea mammals are killed by pollution every year?" /> 
                <Card src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/025/976/original/Screen_Shot_2022-01-29_at_10.46.00_p.m..png?1643517981" text="People who live in places with high levels of air pollutants have a 20% higher risk of death from lung cancer." />
                </div>
            <ul>
                <li><strong>Air pollution</strong></li>
                <p>Polluted air can be extremely dangerous, even if the pollutants are invisible. 
                    It can make people’s eyes burn or make them have difficulty breathing. 
                    It can even increase the risk of lung cancer.</p>
                <li><strong>Water pollution</strong></li>
                <p>Polluted water is not safe for drinking or swimming. People who drink
                     polluted water are exposed to terrible chemicals that can make them sick.
                     Others drink bacteria and other small organisms 
                      that cause disease.</p>
                <li><strong>Land pollution</strong></li>
                <p>Pesticides and fertilizers from agricultural fields can be blown by the wind. 
                    These could harm plants, animals, and even people. Fruits and vegetables
                     absorb the pesticides that help them grow. When people eat those fruits 
                     and vegetables, the pesticides enter their bodies. Some pesticides can 
                     cause cancer and other dangerous diseases.</p>
            </ul>
            <p>People and governments are making great efforts to fight pollution. Luckily, recycling is more common all around the world today. Glass, aluminum cans, and many other types of plastic can be melted and then reused. Doing this reduces the garbage that ends up in the wrong places.</p>
            </div>
        </div>
    )
}
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
            <p>Pollution is the <strong>"introduction of harmful materials into the environment".</strong> These
             very harmful materials are called <strong>pollutants.</strong> Pollutants could also be natural, 
                just like volcanic ash. These can also be created by humans, such 
                as trash or runoff produced by factories. Pollutants <strong>damage the quality 
                of air, water, and land.</strong></p>
                <div className="grid-container">
                <Card src="https://media.istockphoto.com/photos/industrial-pollution-picture-id537871941?b=1&k=20&m=537871941&s=170667a&w=0&h=O-EJBGKTaVqvzU2_mUcK-zdNteLmf9n7i2DG2ZUrcB4=" text="Did you know that over 1 million seabirds and 100,000 sea mammals are killed by pollution every year?" /> 
                <Card src="https://media.istockphoto.com/photos/cars-at-rush-hour-driving-through-thick-smog-picture-id174655376?b=1&k=20&m=174655376&s=170667a&w=0&h=HQUwhsmp-3UcG9BcFEEStAtKy7oKsrbSgZxLKEIHovA=" text="People who live in places with high levels of air pollutants have a 20% higher risk of death from lung cancer." />
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
                      that cause disease. The UN estimates that around 4 thousand children die
                       every single day from drinking polluted water.</p>
                <li><strong>Land pollution</strong></li>
                <p>Pesticides and fertilizers from agricultural fields can be blown by the wind. 
                    These could harm plants, animals, and even people. Fruits and vegetables
                     absorb the pesticides that help them grow. When people eat those fruits 
                     and vegetables, the pesticides enter their bodies. Some pesticides can 
                     cause cancer and other dangerous diseases.</p>
            </ul>
            <p>People and governments are making great efforts to fight pollution. 
                Recycling is becoming more common all around the world. In recycling, <strong>trash is processed 
                so its useful materials can be used again.</strong> Glass, aluminum cans, and many other types of 
                plastic can be melted and then reused. Paper is broken down and turned into new recycled paper. <strong>All of this 
                reduces the amount of garbage</strong> that ends up in landfills, incinerators, and waterways.</p>
            </div>
        </div>
    )
}
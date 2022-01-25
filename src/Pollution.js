import React from "react";
import "./App.css";
import "./Veganism.css";
import Card from "./Card"
import "./Card.css";

export default function Trees() {
    return(
        <div className="Veganism">
            <div className="main">
            <h1>Pollution :]</h1>
            <p>Pollution is the <strong>introduction of harmful materials into the environment</strong>. 
                These harmful materials are called <strong>pollutants.</strong> Pollutants can be natural, 
                such as volcanic ash. They can also be created by human activity, such 
                as trash or runoff produced by factories. Pollutants <strong>damage the quality 
                of air, water, and land.</strong></p>
                <div className="grid-container">
                <Card src="https://media.istockphoto.com/photos/industrial-pollution-picture-id537871941?b=1&k=20&m=537871941&s=170667a&w=0&h=O-EJBGKTaVqvzU2_mUcK-zdNteLmf9n7i2DG2ZUrcB4=" text="Did you know that over 1 million seabirds and 100,000 sea mammals are killed by pollution every year?" /> 
                <Card src="https://media.istockphoto.com/photos/cars-at-rush-hour-driving-through-thick-smog-picture-id174655376?b=1&k=20&m=174655376&s=170667a&w=0&h=HQUwhsmp-3UcG9BcFEEStAtKy7oKsrbSgZxLKEIHovA=" text="People who live in places with high levels of air pollutants have a 20% higher risk of death from lung cancer." />
                </div>
            <ul>
                <li><strong>Air pollution</strong></li>
                <p>Polluted air can be dangerous, even if the pollutants are invisible. 
                    It can make people’s eyes burn and make them have difficulty breathing. 
                    It can also increase the risk of lung cancer.</p>
                <li><strong>Water pollution</strong></li>
                <p>Polluted water is unsafe for drinking and swimming. Some people who drink
                     polluted water are exposed to hazardous chemicals that may make them sick
                      years later. Others consume bacteria and other tiny aquatic organisms 
                      that cause disease. The United Nations estimates that 4,000 children die
                       every day from drinking dirty water.</p>
                <li><strong>Land pollution</strong></li>
                <p>Pesticides and fertilizers from agricultural fields are blown by the wind. 
                    They can harm plants, animals, and sometimes people. Some fruits and vegetables
                     absorb the pesticides that help them grow. When people consume the fruits 
                     and vegetables, the pesticides enter their bodies. Some pesticides can 
                     cause cancer and other diseases.</p>
            </ul>
            <p>Around the world, people and governments are making efforts to combat pollution. 
                Recycling, for instance, is becoming more common. In recycling, <strong>trash is processed 
                so its useful materials can be used again.</strong> Glass, aluminum cans, and many types of 
                plastic can be melted and reused. Paper can be broken down and turned into new paper. <strong>Recycling 
                reduces the amount of garbage</strong> that ends up in landfills, incinerators, and waterways.</p>
            </div>
        </div>
    )
}
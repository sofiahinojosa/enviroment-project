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
            <h1>Donations :]</h1>
            <p>Why is donating important for the environment? The work of <strong>effective charities</strong> can 
            have environmental benefits, such as <strong>improving air quality,</strong> reducing greenhouse gas emissions, 
            preserving habitat, and <strong>reducing hunting pressure</strong> on endangered or rare species.</p>
                <div className="grid-container">
                <Card src="http://supportandfeed.org/app/uploads/2021/07/Photo-Collage-Community.png" text="'Access to nourishing plant based food is a human right' -Maggie Baird from Support And Feed" /> 
                <Card src="https://www.healthyfamilynews.com/wp-content/uploads/2021/04/166367331_3397842650442043_6247810131992794729_n.jpg" text="Founder Maggie Baird with Billie, Finneas, Claudia, and Patrick" />
                </div>
                <h5>The 5 best environmental groups to donate for a better world:</h5>
            <ol>
                <a href="https://supportandfeed.org/" target="_blank" rel="noreferrer" ><li><u>Support And Feed</u></li></a>
                <p>Support + Feed takes a holistic approach to food insecurity; everyone 
                    deserves healthy nutritious food they enjoy and climate change can be 
                    reduced while creating food equity.</p>
                <a href="https://www.edf.org/" target="_blank" rel="noreferrer" ><li>Environmental Defense Fund</li></a>
                <p>The Environmental Defense Fund is perhaps the most wide-ranging
                     organization on this list, working to provide solutions under
                      the broad categories of climate change, oceans, wildlife and
                       habitats, and health. </p>
                <a href="https://www.nature.org/en-us/" target="_blank" rel="noreferrer" ><li>The Nature Conservancy</li></a>
                <p>The Nature Conservancy protects ecologically important lands and 
                    waters around the world with the help of more than 500 staff scientists.</p>
                <a href="https://www.nrdc.org/" target="_blank" rel="noreferrer" ><li>Natural Resources Defense Council</li></a>
                <p>The Natural Resources Defense Council seeks to protect the basics—air, 
                    land, and water—and to defend endangered natural places, with an eye 
                    toward how these long-term decisions affect humans. </p>
                <a href="https://www.americanrivers.org/" target="_blank" rel="noreferrer" ><li>American Rivers</li></a>
                <p>American Rivers protects wild rivers, restores damaged rivers and the 
                    wildlife they support, and conserves clean water for people and nature, 
                    with an eye toward recreationists as well.</p>
            </ol>
            </div>
        </div>
    )
}
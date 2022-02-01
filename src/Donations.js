import React from "react";
import "./App.css";
import "./Veganism.css";
import Card from "./Card"
import "./Card.css";

export default function Trees() {
    //http://supportandfeed.org/app/uploads/2021/07/Photo-Collage-Community.png
    return(
        <div className="Veganism">
            <div className="main">
            <h1>Donations 🙌</h1>
            <p>Why is donating important for the environment? 
                Thanks to the hard work of charities, we can <strong>improve air quality</strong>, 
                 reduce greenhouse gas emissions, preserve the habitat, and <strong>reduce
                  hunting on endangered species.</strong> Imagine everything that’s possible
                   with only a couple of clicks!</p>
                <div className="grid-container">
                <Card src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/025/977/original/Screen_Shot_2022-01-29_at_11.08.59_p.m..png?1643519349" text="'Access to nourishing plant based food is a human right' -Maggie Baird from Support And Feed" /> 
                <Card src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/026/169/original/Screen_Shot_2022-01-31_at_11.36.26_p.m..png?1643693793" text="Research has shown that there is a link between making a donation to charity and feeling joy :]" />
                </div>
                <h5>The 5 best environmental groups to donate for a better world:</h5>
            <ol>
                <a href="https://supportandfeed.org/" target="_blank" rel="noreferrer" ><li><u>Support And Feed</u></li></a>
                <p>Support + Feed takes a holistic approach to food insecurity; everyone 
                    deserves healthy nutritious food they enjoy and climate change can be 
                    reduced while creating food equity.</p>
                <a href="https://www.edf.org/" target="_blank" rel="noreferrer" ><li>Environmental Defense Fund</li></a>
                <p>The Environmental Defense Fund is one of the most wide-ranging
                     organizations, it works to provide solutions about climate change, oceans, wildlife,
                       habitats, and health. </p>
                <a href="https://www.nature.org/en-us/" target="_blank" rel="noreferrer" ><li>The Nature Conservancy</li></a>
                <p>The Nature Conservancy protects ecologically important lands and 
                    waters around the world with the help of more than 500 staff scientists.</p>
                <a href="https://www.nrdc.org/" target="_blank" rel="noreferrer" ><li>Natural Resources Defense Council</li></a>
                <p>The Natural Resources Defense Council wants to protect the air quality and water to save endangered natural places, with an eye 
                    toward how these long-term decisions affect humans. </p>
                <a href="https://www.americanrivers.org/" target="_blank" rel="noreferrer" ><li>American Rivers</li></a>
                <p>American Rivers protects wild rivers, restores damaged rivers and the 
                    wildlife. They also conserve clean water for people and nature, 
                    with an eye toward recreationists as well.</p>
            </ol>
            </div>
        </div>
    )
}
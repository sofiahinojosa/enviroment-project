import React, { useState }  from "react";
import Hamburger from "./Hamburger";
import "./Hamburger.css";
import "./App.css";
import "./Veganism.css";
import Card from "./Card"
import "./Card.css";

export default function Veganism() {
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
            <h1>Veganism :]</h1>
            <p>There are lots of ways to <strong>embrace vegan living.</strong> Veganism is a plant-based diet
                 excluding all animal foods. (meat, fish, shellfish and insects, as well as dairy, eggs and honey) and 
                 avoiding animal-derived materials, products tested on animals and places that use animals for 
                 entertainment.</p>
                <div className="grid-container">
                <a class="blur" href="https://veganuary.com/recipes/plant-powered-winter-bowl/" target="_blank" rel="noreferrer" ><Card src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/025/605/original/Screen_Shot_2022-01-24_at_12.43.00_p.m..png?1643049785" text="Plant powered ‘winter’ bowl"/></a>
                <a class="blur" href="https://veganuary.com/recipes/vegan-chicken-nuggets/" target="_blank" rel="noreferrer" ><Card src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/025/611/original/Screen_Shot_2022-01-24_at_1.18.55_p.m..png?1643051941" text="Vegan chcken nuggets" /></a>
                </div>
                <h5>How to change to a vegan diet:</h5>
            <ol>
                <li>Go vegetarian and then move onto veganism</li>
                <li>Remove all meat from your diet</li>
                <li>Avoid products with gelatin or other animal products</li>
                <li>Eat more whole grains, beans, legumes, tofu, nuts, and seeds</li>
                <li>Swap out your non-vegan items for vegan alternatives</li>
            </ol>
                <p>Vegans <strong>avoid exploiting animals</strong>, that is the reason many 
                 choose a vegan lifestyle. Accessories, clothing, makeup and bathroom items may be 
                 tested on animals, and you can find them almost everywhere. Luckily, nowadays there 
                 are <strong>affordable and easily-sourced alternatives to almost everything</strong>. With around 58 thousand products and 
                 services available, <strong>living a vegan lifestyle is now easier.</strong></p>
            </div>
        </div>
    )
}
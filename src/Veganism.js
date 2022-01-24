import React from "react";
import "./App.css";
import "./Veganism.css";
import Card from "./Card"
import "./Card.css";

export default function Veganism() {
    return(
        <div className="Veganism">
            <div className="main">
            <h1>Veganism :]</h1>
            <p>There are many ways to <strong>embrace vegan living.</strong> Yet one thing all vegans have in common is a plant-based diet
                 avoiding all animal foods such as meat (including fish, shellfish and insects), dairy, eggs and honey - 
                 as well as avoiding animal-derived materials, products tested on animals and places that use animals for 
                 entertainment.</p>
                <div className="grid-container">
                <Card src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lentil-bolognese-1642711558.jpg?crop=0.896xw:0.598xh;0.104xw,0.225xh&resize=980:*" text="Vegan recipe from 'The Vegan Society'"/> <Card src="https://www.greenqueen.com.hk/wp-content/uploads/2020/01/lazy-cat-kitchen-vegan-larb.jpg" />
                </div>
                <h5>Begin planning your transition:</h5>
            <ol>
                <li>Go vegetarian and then move onto veganism</li>
                <li>Remove all meat from your diet, including fish and poultry</li>
                <li>Avoid products containing gelatin, rennet, and other animal products</li>
                <li>Begin incorporating more whole grains, beans, legumes, tofu, nuts, and seeds into your diet</li>
                <li>Swap out all of your favourite non-vegan items for vegan alternatives.</li>
            </ol>
                <p>Vegans <strong>avoid exploiting animals for any purpose</strong>, with compassion being a key reason many 
                 choose a vegan lifestyle. From accessories and clothing to makeup and bathroom items, animal products 
                 and products tested on animals are found in more places than you might expect. Fortunately nowadays there 
                 are <strong>affordable and easily-sourced alternatives to just about everything</strong>. With over 58,000 products and 
                 services registered with our Vegan Trademark alone, <strong>living a vegan lifestyle has never been easier.</strong></p>
            </div>
        </div>
    )
}
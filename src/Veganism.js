import React from "react";
import "./Hamburger.css";
import "./App.css";
import "./Veganism.css";
import Card from "./Card"
import "./Card.css";

export default function Veganism() {

    return(
        <div className="Veganism">
            <div className="main">
            
            <h1>Veganism 🥗</h1>
            <p><strong>There are many ways to be vegan.</strong> Veganism in itself is a plant-based diet, 
                which means no foods that come from animals. They also not only include 
                meat and direct products of animals, but also animal-derived products, 
                ones tested on animals, and those who use use animals for entertainment.</p>
                <div className="grid-container">
                <Card src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/025/970/original/Screen_Shot_2022-01-29_at_10.26.15_p.m..png?1643516782" text="Did you know a plant-based diet increases metabolism by 16%?"/>
                <Card src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/025/968/original/Screen_Shot_2022-01-29_at_10.21.21_p.m..png?1643516491" text="Dont worry, plant-based diets can easily provide complete protein!" />
                </div>
                <h5>How to change to a vegan diet:</h5>
            <ol>
                <li>Go vegetarian and then move onto veganism</li>
                <li>Remove all meat from your diet</li>
                <li>Avoid products with gelatin or other animal products</li>
                <li>Eat more whole grains, beans, legumes, tofu, nuts, and seeds</li>
                <li>Swap out your non-vegan items for vegan alternatives</li>
            </ol>
                <p>Vegans are <strong>against the exploitation of animals,</strong> which is the main cause 
                    people choose to go vegan. This extends not only to food, but also 
                    clothing, makeup, toiletries, and other accessories. It is now easier
                     to <strong>find vegan alternatives</strong> to products and services. It is estimated 
                     that there are around 58 thousand vegan products and services available today.</p>
            </div>
        </div>
    )
}
import React from "react";
import "./App.css";
import "./Veganism.css";
import Card from "./Card"
import "./Card.css";


//https://i.insider.com/6081d30a1041d50019f2db4f?width=700&format=jpeg&auto=webp

export default function Trees() {
    return(
        <div className="Veganism">
            <div className="main">
            <h1>Eco-friendly ♻️</h1>
            <p>"Even if you just make one change rather than turning <strong>your entire household eco-friendly overnight,</strong> 
                you're working to <strong>build better habits</strong> in your corner of the world." (Insider)</p>
                <div className="grid-container">
                <Card src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/025/965/original/Screen_Shot_2022-01-29_at_9.56.50_p.m..png?1643515043" text="Many schools around the world have implemented recicable trash bins" /> 
                <Card src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/025/967/original/Screen_Shot_2022-01-29_at_10.04.59_p.m..png?1643515506" text="Try buying biodegradable options next time!" />
                </div>
                <h5>Eco-friendly ideas you should try:</h5>
            <ul>
                <li>Reusable, organic cotton dish towels</li>
                <li>Reusable grocery bags</li>
                <li>Rechargeable batteries</li>
                <li>Reusable water bottle</li>
                <li>A showerhead that uses less water</li>
                <li>Biodegradable trash bags</li>
                <li>Reusable straws</li>
                <li>Reusable coffee filters</li>
                <li>Secondhand clothes and accessories</li>
            </ul>
            <p>You can have many <strong>positive changes</strong> if you know where to start. 
            There are so many creative ideas you can apply to your daily life. For example, try 
            riding a bike more than a car or use recyclable coffee filters!! The possibilities are endless. </p>
            <a class="button1" target="_blank" rel="noreferrer" href="https://youtu.be/RyvBhC7MT84">Learn more here :)</a>
            <br /><br />
            </div>
        </div>
    )
}
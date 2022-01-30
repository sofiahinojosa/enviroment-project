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
            <p>It's super simple to make <strong>positive changes to your lifestyle</strong> just
                  by knowing where to start. What if you stopped using a K-Cup, and swap
                  it for a reusable coffee filter? What if you're out of laundry detergent? Try one
                   with better ingredients! You dont have to feel ashamed that your
                     trash doesn't fit in a mason jar. <strong>Try to shop local when its possible,</strong> and
                       get only buy what you need. Maybe ride a bike and use public transportation, or try to 
                       fix what you own before replacing it!</p>
            </div>
        </div>
    )
}
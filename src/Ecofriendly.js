import React from "react";
import "./App.css";
import "./Veganism.css";
import Card from "./Card"
import "./Card.css";

export default function Trees() {
    return(
        <div className="Veganism">
            <div className="main">
            <h1>Eco-friendly :]</h1>
            <p>It's surprisingly simple to make positive changes to your lifestyle
                 just by figuring out where to start. Instead of using a K-Cup, swap
                  it for a reusable coffee filter. Out of laundry detergent? Try one
                   with better ingredients. You don't have to subsist on whatever your
                    backyard garden grows to make a difference or feel guilty that your
                     trash doesn't fit in a mason jar. Try to shop local when possible,
                      only buy what you need, bike or walk or use public transportation 
                      when able, fix what you own before replacing it</p>
                <div className="grid-container">
                <Card src="https://i.insider.com/6081d30a1041d50019f2db4f?width=700&format=jpeg&auto=webp" text="Swimwear made from recycled materials (Evarlane)" /> 
                <Card src="https://i.insider.com/59f0ad198280a6bf118b4971?width=700&format=jpeg&auto=webp" text="An e-reader can help diminish the carbon footprint of someone who frequently buys new books" />
                </div>
                <h5>Eco-friendly ideas you should try:</h5>
            <ul>
                <li>Reusable, organic cotton dish towels</li>
                <li>Reusable grocery bags</li>
                <li>Rechargeable batteries</li>
                <li>Reusable water bottle</li>
                <li>A showerhead that uses less water</li>
                <li>Biodegradable trash bags</li>
            </ul>
            <p>It's surprisingly simple to make positive changes to your lifestyle
                 just by figuring out where to start. Instead of using a K-Cup, swap
                  it for a reusable coffee filter. Out of laundry detergent? Try one
                   with better ingredients. You don't have to subsist on whatever your
                    backyard garden grows to make a difference or feel guilty that your
                     trash doesn't fit in a mason jar. Try to shop local when possible,
                      only buy what you need, bike or walk or use public transportation 
                      when able, fix what you own before replacing it</p>
            </div>
        </div>
    )
}
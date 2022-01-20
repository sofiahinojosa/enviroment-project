import React from "react";
import "./App.css";
import "./Veganism.css";
import Card from "./Card"
import "./Card.css";

export default function Trees() {
    return(
        <div className="Veganism">
            <div className="main">
            <h1>Trees :]</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ridiculus, nullam habitant diam eget tincidunt ad nunc quisque, 
                class enim risus odio dapibus dignissim torquent. Neque lacus sollicitudin velit conubia orci 
                gravida parturient nunc nostra vel per vulputate at, 
                montes dui proin mollis integer congue laoreet massa aenean in accumsan magnis. 
                Accumsan scelerisque mus himenaeos natoque pharetra velit rhoncus id vivamus et.</p>
                <div className="grid-container">
                <Card /> <Card />
                </div>
            <ul>
                <li>hello</li>
                <li>idk</li>
                <li>hello</li>
                <li>idk</li>
                <li>hello</li>
                <li>idk</li>
            </ul>
            </div>
        </div>
    )
}
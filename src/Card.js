import React from "react";
import "./Card.css";

export default function Card(props) {
    return(
        <div className="Card">
            <div className="grid-container">
                <div className="grid-item">
                    <img alt="bridge" src={props.src} />
                    <p><strong>{props.text}</strong></p>
                </div>
            </div>
        </div>
    )
}
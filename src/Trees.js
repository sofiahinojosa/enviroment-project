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
            <p>Trees are the <strong>longest living species on earth</strong>, they give us a link between the past, 
                present and future. It’s critical that woodlands, rainforests and trees in urban 
                settings, such as parks, are preserved and sustainably managed across the world. 
                <strong>Why do we need trees anyway?</strong></p>
                <div className="grid-container">
                <Card src="https://media.istockphoto.com/photos/a-view-up-into-the-trees-direction-sky-picture-id1317323736?b=1&k=20&m=1317323736&s=170667a&w=0&h=VARnUilGZvG6Fq_yivfg_8qeXbGRfo5fio3d9ZGeKpw=" text="Did you know tree rings can predict climate change?" /> 
                <Card src="https://media.istockphoto.com/photos/young-married-couple-in-work-uniform-with-shovel-plant-tree-sapling-picture-id1297549908?b=1&k=20&m=1297549908&s=170667a&w=0&h=2Qppj64ZCNVxuPo6SFFkh9cpVBS7epuoHxf-EGb4RHo=" text="Planting trees can save you up to 25% on your energy bills." />
                </div>
            <ul>
                <li>Trees act as a physical filter</li>
                <li>Trees and shrubs are known to have medicinal properties</li>
                <li>They absorb carbon dioxide as they grow</li>
                <li>Reduce wind speeds and cool the air as they lose moisture and reflect heat</li>
                <li>Help prevent flooding and soil erosion</li>
                <li>Stress levels go down withing minutes of being surrouded by trees</li>
            </ul>
            <p>People have proposed many solutions to this environmental issue called <strong>deforestation</strong>, 
            including either shipping everyone to the Moon or...to just <strong>stop cutting trees!</strong> Without trees, 
            humans would not be able survive because the <strong>air would be unsuitable for breathing.</strong> If anything, people would 
            have to develop gas masks that filter the little oxygen that would be left in the air. If there aren't trees, 
            <strong>there won't be any products you can get from them.</strong> We use and waste paper everyday without realizing we're helping 
            to kill <strong>four billion trees cut down every year.</strong> Food harvested from trees like fruits, nuts, 
            berries (and maple syrup) would be nonexistent as well. Let's do something about it now!</p>
            </div>
        </div>
    )
}
import React from "react";
import Rectangle from "../Rectangle/Rectangle";
import "./Main.css"
import car from "../../images/yellow-car.jpg"
import manette from "../../images/manette.jpg"
import sabat from "../../images/sabat.jpg"
import camera from "../../images/camera.jpg"
import nike from "../../images/nike.jpg"
import jaune from "../../images/jaune.jpg"
import mercedes from "../../images/mercedes.jpg"
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function Main(){
    return (
        <div id="main" className="Main">
            <Rectangle />
            <h1>Present your <span className="product">product</span></h1>
            <div className="box1">
                <img src={sabat} />
            </div>
            <div className="box2">
                <img src={manette} />
            </div>
            <div className="box3">
                <img src={car} />   
            </div>
            <div className="box4">
                <img src={camera} />
            </div>
            <div className="box5">
            <img src={mercedes} />
            </div>
            <div className="box6">
            <img src={nike} />
            </div>
            <div className="box7">
            <img src={jaune} />
            </div>
            <div class="custom-shape-divider-bottom-1651213131">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z" class="shape-fill"></path>
    </svg>
</div>
        </div>
    )
}

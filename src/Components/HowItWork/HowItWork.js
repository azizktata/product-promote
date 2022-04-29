import * as React from 'react';
import support from "../../images/Customer Support.png"
import time from "../../images/Last 24 Hours.png"
import speed from "../../images/Speedometer.png"
import error from "../../images/Error.png"

import "./HowItWork.css"



export default function HowItWork() {
  return (
    <div id='howitwork' className='howitwork'>
        <div className='inside'>
        <h3>Delivering good designs since 1954 🚚💨</h3>
        <p className='first-txt'>We’re the first multi-purpose design kit solutions for businesses. We help you bridge
        gaps between your layouts, templates and developers to empower all involved.</p>
        <div className='cards'>
        <div className='card'>
            <img src={support} alt="logo1"/>
            <h5>support</h5>     
            <p>Delivering faster and more personalized support with shared screens and cool design systems for Figma</p>   
            <button >learn more</button>
        </div>
        <div className='card'>
            <img src={time} alt="logo2"/>
            <h5>respond-time</h5>     
            <p>Delivering faster and more personalized support with shared screens and cool design systems for Figma</p>   
            <button>learn more</button>
        </div>
        <div className='card'>
            <img src={speed} alt="logo3"/>
            <h5>delivery</h5>     
            <p>Delivering faster and more personalized support with shared screens and cool design systems for Figma</p>   
            <button>learn more</button>
        </div>
        <div className='card'>
            <img src={error} alt="logo4"/>
            <h5>report</h5>     
            <p>Delivering faster and more personalized support with shared screens and cool design systems for Figma</p>   
            <button>learn more</button>
        </div>
        </div>
        </div>
        <div class="custom-shape-divider-top-1651214626">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" class="shape-fill"></path>
    </svg>
</div>
    </div>
  );
}
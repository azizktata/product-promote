import React from "react";
import "./NavBar.css";
import logo from "../../images/logo.png"
import { AiOutlineMenu } from "react-icons/ai";
export default function NavBar(){
    
    return(
        <nav className="nav-center">
            <div className="nav-header">
                <div className="Logo">
                    <img src={logo} alt="logo" />
                    <h3>Logo</h3>
                </div>
                
                <button className="nav-toggle">
                    <AiOutlineMenu />
                </button>
            </div>
                <div className="links-container show-container">
                <ul className="links">
                    <li>
                        <a href="#howitwork">How it works </a>
                        
                    </li>
                    <li>
                        <a href="#main">Who we are </a>
                    </li>
                    <li>
                        <a href="#pricing">Pricing </a>
                    </li>
                    <li>
                        <a href="#footer">Contact us </a>
                    </li>
                </ul>
                </div>
                <button className="sign-in">Sign In</button>
            
        </nav>
    )
}
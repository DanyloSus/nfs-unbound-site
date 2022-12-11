import React from "react";
import logo from "../images/logo.webp"

export default function Start () {
    return (
        <div id="start" className="body">
            <img 
                src={logo}
                alt="logo"
                className="reveal3"
            />
            <a href="https://store.steampowered.com/app/1846380/Need_for_Speed_Unbound/" target="_blank" rel="noreferrer">
                <button>Buy here</button>
            </a>
        </div>
    );
}
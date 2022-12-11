import React from "react";
import logo from "../images/logo.webp";

export default function Header () {
    return (
        <header>
            <a href="https://store.steampowered.com/app/1846380/Need_for_Speed_Unbound/" target="_blank" rel="noreferrer">
                <img 
                    src={logo}
                    alt="logo"
                    className="logo reveal3s"
                />
            </a>
            <a href="#start"><p>Start</p></a>
            <a href="#story"><p>Story</p></a>
            <a href="#music"><p>Music</p></a>
            <a href="#rating"><p>Rating</p></a>
            <a href="#finish"><p>Trailer</p></a>
        </header>
    );
}
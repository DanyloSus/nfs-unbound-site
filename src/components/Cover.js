import React from "react";
import logo from "../images/logo.webp"

export default function Cover () {
    return (
        <div id="cover" onClick={
            function cover () {
                let cover = document.getElementById("cover");
                cover.style.opacity = "0";
                cover.style.zIndex = 0
                document.getElementsByTagName('body')[0].style.overflow = "visible";
                document.getElementsByTagName('html')[0].style.scrollBehavior = "smooth";
            }
        }>
            <div>
                <img 
                    src={logo}
                    alt="NFS logo"
                    align="center"
                />
                <p align="center">Press</p>
            </div>
        </div>
    );
}
import React from "react";
import git from "../images/github.png";

export default function Footer () {
    return (
        <footer>
            <div>
                <div>Sushko Danylo</div>
                <button>Buy here</button>
                <a href="https://github.com/DanyloSus">
                    <img 
                        src={git}
                        alt="GitHub"
                        className="ico"
                    />
                </a>
            </div>
        </footer>
    );
}
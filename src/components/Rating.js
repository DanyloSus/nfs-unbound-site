import React from "react";
import metaCritic from "../images/metacritic_logo.png";

export default function Rating () {
    return (
        <div id="rating" className="body">
            <h1 align="center">Rating</h1>
            <div className="rating">
                <div>
                    <img 
                        src={metaCritic}
                        alt="MetaCritic logo"
                        className="rating-logo"
                    />
                    <p>MetaCritic:</p>
                    <div>74</div>
                </div>
                <div>
                    <img 
                        src={metaCritic}
                        alt="MetaCritic logo"
                        className="rating-logo"
                    />
                    <p>User Score:</p>
                    <div>6.1</div>
                </div>
            </div>
        </div>
    );
}
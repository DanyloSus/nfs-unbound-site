import React from "react";
import Header from "./components/Header";
import Start from "./components/Start";
import Story from "./components/Story";
import Music from "./components/Music";

export default function App () {
    return (
        <div>
            <Header />
            <div id="body">
                <Start />
                <Story />
                <Music />
            </div>
        </div>
    );
}
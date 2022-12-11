import React from "react";
import Header from "./components/Header";
import Start from "./components/Start";
import Story from "./components/Story";
import Music from "./components/Music";
import Rating from "./components/Rating";
import Finish from "./components/Finish";
import Footer from "./components/Footer";
import Cover from "./components/Cover";

export default function App () {
    return (
        <div>
            <Cover />
            <Header />
            <div id="body">
                <Start />
                <Story />
                <Music />
                <Finish />
                <Rating />
            </div>
            <Footer />
        </div>
    );
}
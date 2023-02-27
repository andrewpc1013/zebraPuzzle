import React from "react";
import { Navbar, Home } from "./";
import { Routes, Route } from "react-router-dom";

const Main = () => {
    return(
        <div id="main">
            <Navbar />
            <div id="container">
                <Routes>
                    <Route exact path="/" element = {
                        <Home/>
                    }/>
                </Routes>
            </div>
        </div>
    )
}

export default Main
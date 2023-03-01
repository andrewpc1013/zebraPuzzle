import React, { useState } from "react";
import { Navbar, Home, Elements, Clues } from "./";
import { Routes, Route } from "react-router-dom";

const Main = () => {
    const [numPeople, setNumPeople] = useState(0);
    const [properties, setProperties] = useState({});
    const [validElements, setValidElements] = useState(false);

    return(
        <div id="main">
            <Navbar />
            <div id="container">
                <Routes>
                    <Route exact path="/" element = {
                        <Home/>
                    }/>
                    <Route path="/Elements" element = {
                        <Elements
                            numPeople={numPeople}
                            setNumPeople={setNumPeople}
                            validElements={validElements}
                            setValidElements={setValidElements}
                            properties={properties}
                            setProperties={setProperties}
                        ></Elements>
                    }/>
                    <Route path="/Clues" element = {
                        <Clues
                            properties={properties}
                            setProperties={setProperties}
                        ></Clues>
                    }/>
                </Routes>
            </div>
        </div>
    )
}

export default Main
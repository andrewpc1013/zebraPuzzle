import React, { useState } from "react";
import { Navbar, Home, Elements, Clues } from "./";
import { Routes, Route } from "react-router-dom";

const Main = () => {
    const [numPeople, setNumPeople] = useState(0);
    const [numProperties, setNumProperties] = useState(0);
    const [validElements, setValidElements] = useState(false);
    const [elements, setElements] = useState([]);

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
                            numProperties={numProperties}
                            setNumProperties={setNumProperties}
                            validElements={validElements}
                            setValidElements={setValidElements}
                            elements={elements}
                            setElements={setElements}
                        ></Elements>
                    }/>
                    <Route path="/Clues" element = {
                        <Clues/>
                    }/>
                </Routes>
            </div>
        </div>
    )
}

export default Main
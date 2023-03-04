import React, { useEffect } from "react"
import { PuzzleSolver } from "./"

const Home = (props) => {
    const properties = props.properties;
    const setProperties = props.setProperties;
    const numPeople = props.numPeople;
    const setNumPeople = props.setNumPeople;
    const validElements = props.validElements;
    const setValidElements = props.setValidElements;
    const clues = props.clues;
    const setClues = props.setClues;
    const validClues = props.validClues;
    const setValidClues = props.setValidClues;

    useEffect(() => {
        if (localStorage.getItem("properties")) {
            setProperties(JSON.parse(localStorage.getItem("properties")));
        }

        if (localStorage.getItem("numPeople")) {
            setNumPeople(JSON.parse(localStorage.getItem("numPeople")));
        }

        if (localStorage.getItem("validElements")) {
            setValidElements(JSON.parse(localStorage.getItem("validElements")));
        }

        if (localStorage.getItem("clues")) {
            setClues(JSON.parse(localStorage.getItem("clues")));
        }

        if (localStorage.getItem("validClues")) {
            setValidClues(JSON.parse(localStorage.getItem("validClues")));
        }
    }, [])

    return (
        <div>
            <h1>Welcome Home</h1>
            <h2>Valid Elements: {`${validElements}`}</h2>
            <h2>Valid Clues: {`${validClues}`}</h2>
            {
                (validClues && validElements) && <PuzzleSolver
                    properties={properties}
                    numPeople={numPeople}
                    clues={clues}
                ></PuzzleSolver>
            }
        </div>
    )
}

export default Home
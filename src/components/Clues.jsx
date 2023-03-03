import React, { useEffect, useState } from "react"
import { ElementTable, Clue, ClueEditor } from "./"

const Clues = (props) => {
    const [numClues, setNumClues] = useState(0);

    const properties = props.properties;
    const setProperties = props.setProperties;
    const clues = props.clues;
    const setClues = props.setClues;
    const validClues = props.validClues;
    const setValidClues = props.setValidClues;

    const validClueDisplay = document.getElementById("validClues");

    useEffect(() => {
        if (localStorage.getItem("properties")) {
            setProperties(JSON.parse(localStorage.getItem("properties")));
        }
    }, []);

    useEffect(() => {
        if (localStorage.getItem("clues")) {
            setClues(JSON.parse(localStorage.getItem("clues")));
            setNumClues(clues.length);
        }
    }, []);

    useEffect(() => {
        checkValidClues();
    }, [numClues]);

    const checkValidClues = () => {
        let valid = true;

        clues.map((clue) => {
            if (clue.element1Prop === clue.element2Prop) {
                valid = false;
            }
        })

        if (valid) {
            validClueDisplay.className = "valid";
        } else {
            validClueDisplay.className = "invalid";
        }

        setValidClues(valid);

        return valid;
    }

    const saveClues = () => {
        localStorage.setItem("clues", JSON.stringify(clues));
    }

    const clearClues = () => {
        localStorage.removeItem("clues");
        setClues([]);
        // localStorage.clear();
    }

    const addClue = () => {
        let tempArray = clues;
        tempArray.push({element1: "", element1Prop: "", relationship: "", element2: "", element2Prop: ""});
        setClues(tempArray);
        setNumClues(clues.length);
    }

    return (
        <div>
            <h1>You're in Clues</h1>
            <div>
                {
                    //list of created clues
                    //delete button in each clue
                    //Maybe create a clue component for each one?
                    clues.map((clue, idx) => {
                        return(
                            <Clue
                                key={"clue: " + idx}
                                clues={clues}
                                clue={clue}
                                index={idx}
                                setClues={setClues}
                                properties={properties}
                                setNumClues={setNumClues}
                                checkValidClues={checkValidClues}
                            ></Clue>
                        )
                    })
                }
            </div>
            <button onClick={() => {
                addClue();
            }}>New Clue</button>
            <button onClick={() => {
                saveClues();
            }}>Save Clues</button>
            <button onClick={() => {
                clearClues();
            }}>Clear Clues</button>
            <button onClick={() => console.log(clues)}>Console Log Clues</button>
            <h2 id="validClues">Valid Clues: {`${validClues}`}</h2>
        </div>
    )
}

export default Clues
import React, { useEffect, useState } from "react"
import { ElementTable, Clue, ClueEditor } from "./"

const Clues = (props) => {
    const [numClues, setNumClues] = useState(0);
    const [choosing, setChoosing] = useState(0);
    //choosing: 0 = nothing
    //          1 = first element
    //          2 = relationship
    //          3 = second element


    const properties = props.properties;
    const setProperties = props.setProperties;
    const clues = props.clues;
    const setClues = props.setClues;

    useEffect(() => {
        if (localStorage.getItem("properties")) {
            setProperties(JSON.parse(localStorage.getItem("properties")));
        }
    }, [])

    const addClue = () => {
        let tempArray = clues;
        tempArray.push({element1: "", relationship: "", element2: ""});
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
                                choosing={choosing}
                                setChoosing={setChoosing}
                                properties={properties}
                            ></Clue>
                        )
                    })
                }
            </div>
            {/* {
                //probably delete this
                (choosing !== 0) && <ClueEditor
                    choosing={choosing}
                    setChoosing={setChoosing}
                    properties={properties}
                    clues={clues}
                    setClues={setClues}
                ></ClueEditor>
            } */}
            {
                (choosing === 0) && <button onClick={() => {
                    // setChoosing(1);
                    addClue();
                }}>New Clue</button>
            }
            <button onClick={() => console.log(clues)}>Clues</button>
        </div>
    )
}

export default Clues
import React, { useState } from "react"
import { ElementTable } from "."

const ClueEditor = (props) => {
    const [relation, setRelation] = useState("Positive");

    const choosing = props.choosing;
    const setChoosing = props.setChoosing;
    const properties = props.properties;
    const clues = props.clues;
    const setClues = props.setClues;
    const index = props.index;
    const checkValidClues = props.checkValidClues;

    return (
        <div>
            Clue Editor
            {/* if choosing = 1 create an element table that lets user select an element */}
            {
                (choosing === 1) && <ElementTable
                    properties={properties}
                    choosing={choosing}
                    setChoosing={setChoosing}
                    clues={clues}
                    setClues={setClues}
                    index={index}
                    checkValidClues={checkValidClues}
                ></ElementTable>
            }
            {/* if choosing = 2 make a selector that chooses a positive or negative relationship between elements */}
            {
                (choosing === 2) && <form onSubmit={(event) => {
                    event.preventDefault();
                    
                    let tempArray = clues;
                    tempArray[index].relationship = relation;
                    setClues(tempArray);

                    setChoosing(0);
                }}>
                    <select onChange={(event) => {
                        setRelation(event.target.value);
                    }}>
                        <option>Positive</option>
                        <option>Negative</option>
                    </select>
                    <button>Submit</button>
                </form>
            }
            {/* if choosing = 3 create an element table that lets user select an element */} 
            {
                (choosing === 3) && <ElementTable
                    properties={properties}
                    choosing={choosing}
                    setChoosing={setChoosing}
                    clues={clues}
                    setClues={setClues}
                    index={index}
                    checkValidClues={checkValidClues}
                ></ElementTable>
            }
            {/* after all 3 values are chosen, push a new clue into clues and clear element1,relationship,element2 */}
        </div>
    )
}

export default ClueEditor
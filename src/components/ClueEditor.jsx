import React, { useState } from "react"
import { ElementTable } from "."

const ClueEditor = (props) => {
    const choosing = props.choosing;
    const setChoosing = props.setChoosing;
    const properties = props.properties;
    const clues = props.clues;
    const setClues = props.setClues;

    return (
        <div>
            Clue Editor
            {/* if choosing = 1 create an element table that lets user select an element */}
            {
                (choosing === 1) && <ElementTable
                    properties={properties}
                    choosing={choosing}
                    setChoosing={setChoosing}
                ></ElementTable>
            }
            {/* if choosing = 2 make a selector that chooses a positive or negative relationship between elements */}
            {
                (choosing === 2) && <select>
                    <option>Positive</option>
                    <option>Negative</option>
                </select>
            }
            {/* if choosing = 3 create an element table that lets user select an element */} 
            {
                (choosing === 3) && <ElementTable
                    properties={properties}
                    choosing={choosing}
                    setChoosing={setChoosing}
                ></ElementTable>
            }
            {/* after all 3 values are chosen, push a new clue into clues and clear element1,relationship,element2 */}
        </div>
    )
}

export default ClueEditor
import React, { useState } from "react"
import ClueEditor from "./ClueEditor";

const Clue = (props) => {
    const [choosing, setChoosing] = useState(0);
    //choosing: 0 = nothing
    //          1 = first element
    //          2 = relationship
    //          3 = second element

    const clues = props.clues;
    const clue = props.clue; 
    const index = props.index;
    const setClues = props.setClues;
    const properties = props.properties;
    const setNumClues = props.setNumClues;
    const checkValidClues = props.checkValidClues;

    const deleteClue = () => {
        let tempArray = clues;
        tempArray.splice(index, 1);
        setClues(tempArray);
        setNumClues(clues.length);
    }

    return (
        <div id="clueContainer">
            <div id="clue">
                {/* button for element1 */}
                <button className="elemCell" onClick={() => {
                    setChoosing(1);
                }}>{clue.element1}</button>
                {/* button for relationship */}
                <button className="elemCell" onClick={() => {
                    setChoosing(2);
                }}>{clue.relationship}</button>
                {/* button for element2 */}
                <button className="elemCell" onClick={() => {
                    setChoosing(3);
                }}>{clue.element2}</button>
                {/* button for deleting clue */}
                <button className="elemCell" onClick={() => {
                    deleteClue();
                    setChoosing(0);
                }}>X</button>
            </div>
            {
                (choosing !== 0) && <ClueEditor
                    choosing={choosing}
                    setChoosing={setChoosing}
                    properties={properties}
                    clues={clues}
                    setClues={setClues}
                    index={index}
                    checkValidClues={checkValidClues}
                ></ClueEditor>
            }
        </div>
    )
}

export default Clue
import React from "react"
import ClueEditor from "./ClueEditor";

const Clue = (props) => {
    const clues = props.clues;
    const clue = props.clue; 
    const index = props.index;
    const setClues = props.setClues;
    const choosing = props.choosing;
    const setChoosing = props.setChoosing;
    const properties = props.properties;

    const deleteClue = () => {
        let tempArray = clues;
        tempArray.splice(index, 1);
        setClues(tempArray);
    }

    return (
        <div>
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
            }}>X</button>
            {
                (choosing !== 0) && <ClueEditor
                    choosing={choosing}
                    setChoosing={setChoosing}
                    properties={properties}
                    clues={clues}
                    setClues={setClues}
                ></ClueEditor>
            }
        </div>
    )
}

export default Clue
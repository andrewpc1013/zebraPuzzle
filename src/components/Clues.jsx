import React, { useEffect, useState } from "react"
import { ElementTable, ClueCreator } from "./"

const Clues = (props) => {
    const [choosing, setChoosing] = useState(0)
    //choosing: 0 = nothing
    //          1 = first element
    //          2 = relationship
    //          3 = second element

    const properties = props.properties;
    const setProperties = props.setProperties;

    useEffect(() => {
        if (localStorage.getItem("properties")) {
            setProperties(JSON.parse(localStorage.getItem("properties")));
        }
    }, [])

    return (
        <div>
            <h1>You're in Clues</h1>
            {/* <ElementTable
                properties={properties}
            ></ElementTable> */}
            {
                //list of created clues
            }
            {
                (choosing !== 0) && <ClueCreator
                    //props
                ></ClueCreator>
            }
            {
                (choosing === 0) && <button onClick={() => {
                    setChoosing(1);
                }}>New Clue</button>
            }
        </div>
    )
}

export default Clues
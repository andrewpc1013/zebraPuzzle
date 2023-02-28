import React, { useEffect } from "react"

const Elements = (props) => {
    const numPeople = props.numPeople;
    const setNumPeople = props.setNumPeople;
    const numProperties = props.numProperties;
    const setNumProperties = props.setNumProperties;

    let elements = {
        
    }

    return (
        <div id="elementsPage">
            <h1>You're in Elements</h1>
            <label># of People:<input type="number" min="2" onChange={(event) => {
                setNumPeople(event.target.value);
            }}></input></label>
            <div>

            </div>
            <button onClick={() => {
                setNumProperties(numProperties + 1);
            }}>
                Add Property
            </button>
        </div>
    )
}

export default Elements
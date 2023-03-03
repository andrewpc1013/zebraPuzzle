import React, { useEffect } from "react"

const Home = (props) => {
    const validElements = props.validElements;
    const setValidElements = props.setValidElements;
    const validClues = props.validClues;
    const setValidClues = props.setValidClues;

    useEffect(() => {
        if (localStorage.getItem("validElements")) {
            setValidElements(JSON.parse(localStorage.getItem("validElements")));
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
            {console.log(validElements, validClues)}
        </div>
    )
}

export default Home
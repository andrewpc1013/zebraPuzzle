import React from "react"

const ElementTable = (props) => {
    const properties = props.properties;
    const choosing = props.choosing;
    const setChoosing = props.setChoosing;
    const clues = props.clues;
    const setClues = props.setClues;
    const clueIndex = props.index;
    const checkValidClues = props.checkValidClues;

    return (
        <div id="elemTables">
            <table>
                <tbody>
                    {
                        Object.keys(properties).map((property, idx) => {
                            return (<tr key={"propTable TR: " + idx}><td className="propCell">{property}</td></tr>)
                        })
                    }
                </tbody>
            </table>
            <table>
                <tbody>
                    {
                        Object.keys(properties).map((property, idx) => {
                            return (<tr key={"elemTable TR: " + idx}>
                                {
                                    Object.keys(properties[property]).map((element, index) => {
                                        if (properties[property][element]) {
                                            return (
                                                <td className="elemCell" key={"elemTable TD: " + index + " at TR: " + idx} onClick={() => {
                                                    let tempArray = clues;
                                                    if (choosing === 1) {
                                                        tempArray[clueIndex].element1 = element;
                                                        tempArray[clueIndex].element1Prop = property;
                                                    } 
                                                    else if (choosing === 3) {
                                                        tempArray[clueIndex].element2 = element;
                                                        tempArray[clueIndex].element2Prop = property;
                                                    }
                                                    else {
                                                        console.log("choosing error: " + choosing)
                                                    }
                                                    setClues(tempArray);

                                                    checkValidClues();

                                                    setChoosing(0);
                                                }}>
                                                    {element}
                                                </td>
                                            )
                                        }
                                    })
                                }
                            </tr>)
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ElementTable
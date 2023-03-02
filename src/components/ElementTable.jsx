import React from "react"

const ElementTable = (props) => {
    const properties = props.properties;
    const choosing = props.choosing;
    const setChoosing = props.setChoosing;
    // const currentClue = props.currentClue;
    // const setCurrentClue = props.setCurrentClue;

    return (
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

                                                if (choosing === 1) {
                                                    // let tempObj = currentClue;
                                                    // tempObj["element1"] = element;
                                                    // setCurrentClue(tempObj);

                                                    // setChoosing(2);
                                                }
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
    )
}

export default ElementTable
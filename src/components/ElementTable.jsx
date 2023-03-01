import React from "react"

const ElementTable = (props) => {
    const properties = props.properties;

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
                                            <td className="elemCell" key={"elemTable TD: " + index + " at TR: " + idx}>
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
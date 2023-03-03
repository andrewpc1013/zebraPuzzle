import React, { useEffect, useState } from "react"
import { Property } from "./"

const Elements = (props) => {
    const [selectedProperty, setSelectedProperty] = useState("pets");

    const numPeople = props.numPeople;
    const setNumPeople = props.setNumPeople;
    const properties = props.properties;
    const setProperties = props.setProperties;
    const validElements = props.validElements;
    const setValidElements = props.setValidElements;

    const validElemDisplay = document.getElementById("validElements");

    const possibleProperties = {
        pets: ["lion", "panda", "fox", "frog", "elephant"], 
        name: ["William", "Mary", "Johanne", "Louis", "Sarah"], 
        nationality: ["German", "American", "French", "Japanese", "Korean"],
        weather: ["night","sunrise", "tornado", "sun", "rain"]
    }

    useEffect(() => {
        if (localStorage.getItem("properties")) {
            setProperties(JSON.parse(localStorage.getItem("properties")));
        }

        if (localStorage.getItem("numPeople")) {
            setNumPeople(JSON.parse(localStorage.getItem("numPeople")));
        }
    }, [])

    useEffect(() => {
        setValidElements(checkValidElements());
    }, [properties]);

    useEffect(() => {
        setValidElements(checkValidElements());
    }, [numPeople]);

    const checkValidElements = () => {
        let valid = true;

        Object.keys(properties).map((property) => {
            let selectedElementCount = 0;

            Object.keys(properties[property]).map((element) => {
                if (properties[property][element]) {
                    selectedElementCount++;
                }
            })

            if (selectedElementCount != numPeople) {
                valid = false;
            }
        })

        if (numPeople == 0 || Object.keys(properties).length == 0) {
            valid = false;
        }

        if (valid && validElemDisplay) {
            validElemDisplay.className = "valid";
        } else if (validElemDisplay) {
            validElemDisplay.className = "invalid";
        }

        return valid;
    }

    const saveElements = () => {
        localStorage.setItem("properties", JSON.stringify(properties));
        localStorage.setItem("numPeople", JSON.stringify(numPeople));
    }

    const clearElements = () => {
        // localStorage.removeItem("properties");
        // localStorage.removeItem("numPeople")
        localStorage.clear();
        setProperties({});
    }

    return (
        <div id="elementsPage">
            <h1>You're in Elements</h1>
            <label># of People:<input type="number" min="2" onChange={(event) => {
                setNumPeople(event.target.value);
            }}></input></label>
            <div>
                {
                    Object.keys(properties).map((property, idx) => {
                        return(
                            <Property 
                                key={"property idx: " + idx} 
                                property={properties[property]} 
                                propertyName={property}
                                properties={properties}
                                setProperties={setProperties}
                                setValidElements={setValidElements}
                                numPeople={numPeople}
                                checkValidElements={checkValidElements}
                            ></Property>
                        )
                    })
                }
            </div>
            <form onSubmit={(event) => {
                event.preventDefault(); 

                let tempProperty = {};
                possibleProperties[selectedProperty].map((possibleElement) => {
                    tempProperty[possibleElement] = false;
                })

                let tempObj = {...properties};
                tempObj[selectedProperty] = tempProperty;

                setProperties(tempObj);
            }}>
                <select id="propertySelector" onChange={(event) => {
                    setSelectedProperty(event.target.value);
                }}>
                    {
                        Object.keys(possibleProperties).map((property, idx) => {
                            return(<option value={property} key={"option idx: " + idx}>{property}</option>);
                        })
                    }
                </select>
                <button>
                    Add Property
                </button>
            </form>
            <h2 id="validElements">Valid Elements: {`${validElements}`}</h2>
            <button onClick={() => {
                saveElements();
            }}>Save Elements</button>
            <button onClick={() => {
                clearElements();
            }}>Clear Project</button>
            <button onClick={() => {
                console.log(JSON.parse(localStorage.getItem("properties")));
            }}>Print Elements</button>
        </div>
    )
}

export default Elements
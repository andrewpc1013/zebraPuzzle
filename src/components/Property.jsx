import React from "react"

const Property = (props) => {
    const numPeople = props.numPeople;
    const property = props.property;
    const propertyName = props.propertyName;
    const properties = props.properties;
    const setProperties = props.setProperties;
    const setValidElements = props.setValidElements;
    const checkValidElements = props.checkValidElements;

    const deleteProperty = () => {
        let tempObj = {...properties};
        delete tempObj[propertyName];
        setProperties(tempObj);
    }

    const selectElement = (elementName) => {
        let tempObj = properties;
        const thisElement = document.getElementById(elementName);

        if (tempObj[propertyName][elementName]) {
            tempObj[propertyName][elementName] = false;
            thisElement.className = "inactive";
        }
        else {
            tempObj[propertyName][elementName] = true;
            thisElement.className = "active";
        }

        setProperties(tempObj);

        setValidElements(checkValidElements());
    }

    return (
        <div className="elementSelector">
            <h2 id="propertyName">{propertyName}: </h2>
            {
                Object.keys(property).map((elementName, idx) => {
                    if (properties[propertyName][elementName]) {
                        return (<button id={elementName} className="active" key={elementName +":" + idx} onClick={() => {
                            selectElement(elementName)
                        }}>{elementName}</button>)
                    }
                    else {
                        return (<button id={elementName} className="inactive" key={elementName +":" + idx} onClick={() => {
                            selectElement(elementName)
                        }}>{elementName}</button>)
                    }
                })
            }
            <button onClick={deleteProperty}>X</button>
        </div>
    )
}

export default Property
import React from "react"

const PuzzleSolver = (props) => {
    const properties = props.properties;
    const numPeople = props.numPeople;
    const clues = props.clues;

    //ghosts template
    // let ghosts = [
    //     {
    //         positiveElements: {
    //             pets: "lion"
    //         },
    //         negativeElements: {
    //             weather: [rain, sun]
    //         }
    //     },
    //     {
    //         positiveElements: {
    //             name: "William"
    //             weather: "rain"
    //         },
    //         negativeElements: {

    //         }
    //     }
    // ]

    const solvePuzzle = () => {
        //main puzzle solving function
        console.log("solving...");

        let ghosts = createInitialGhosts();

        ghosts = useAllClues(ghosts);

        console.log(ghosts);
    }

    const addPositiveElement = (ghost, element, property) => {
        // if this ghost doesn't already have an element in this property category, add it
        if (!ghost.positiveElements[`${property}`]) {
            ghost.positiveElements[`${property}`] = element;
        }

        return ghost;
    }

    const addNegativeElement = (ghost, element, property) => {
        // if this ghost doesn't yet contain this category of negative elements, add it
        if (!ghost.negativeElements[`${property}`]) {
            ghost.negativeElements[`${property}`] = [];
        }

        // if element isn't already in the list of negative elements for this ghost, add it
        if (!ghost.negativeElements[`${property}`].includes(element)) {
            ghost.negativeElements[`${property}`].push(element);
        }

        return ghost;
    }

    const createInitialGhosts = () => {
        //map through elements and create a ghost for each element in the table
        let initialGhosts = []

        Object.keys(properties).forEach((property) => {
            Object.keys(properties[property]).forEach((element) => {
                initialGhosts.push(createGhost(element, property));
            })
        })

        return initialGhosts;
    }

    const createGhost = (element, property) => {
        //create a single ghost with a positive element in the category of property
        let ghost = {
            positiveElements: {[property]: element},
            negativeElements: {}
        }

        return ghost;
    }

    const useAllClues = (ghosts) => {
        clues.forEach((clue) => {
            //add positive attributes to ghosts using positive clues
            if (clue.relationship === "Positive") {
                ghosts = usePositiveClue(ghosts, clue);
            }
            //add negative attributes to ghosts using negative clues
            else if (clue.relationship === "Negative") {
                ghosts = useNegativeClue(ghosts, clue);
            }
            else {
                console.log("relationship error at clue: ", clue);
            }
        })

        return ghosts;
    }

    // *** need to break this into multiple functions. Code in else statement will be used every time addPositiveElement is used (I think) (or something similar)
    // 
    // 
    const usePositiveClue = (ghosts, clue) => {
        ghosts.forEach((ghost) => {
            let ghostPositiveElements = Object.values(ghost.positiveElements);
            let ghostPositiveKeys = Object.keys(ghost.positiveElements);

            // add element1 as a positive element to all ghosts matching element2 that don't already have element1
            if (ghostPositiveElements.includes(clue.element2)) {
                if (!ghostPositiveElements.includes(clue.element1)) {
                    addPositiveElement(ghost, clue.element1, clue.element1Prop);
                }
            }
            // add element2 as a positive element to all ghosts matching element1 that don't already have element2
            else if (ghostPositiveElements.includes(clue.element1)) {
                if (!ghostPositiveElements.includes(clue.element2)) {
                    addPositiveElement(ghost, clue.element2, clue.element2Prop);
                }
            }
            else {
                // add element1 as a negative element to all other ghosts matching element1Prop but not element1 or element2
                if (ghostPositiveKeys.includes(clue.element1Prop)) {
                    addNegativeElement(ghost, clue.element2, clue.element2Prop);
                }
                // add element2 as a negative element to all other ghosts matching element2Prop but not element1 or element2
                if (ghostPositiveKeys.includes(clue.element2Prop)) {
                    addNegativeElement(ghost, clue.element1, clue.element1Prop);
                }
            }
        })

        return ghosts;
    }

    const useNegativeClue = (ghosts, clue) => {
        // add element1 as a negative element to all ghosts matching element2

        // add element2 as a negative element to all ghosts matching element1

        console.log("negative clue")

        return ghosts;
    }

    return (
        <div>
            <button onClick={() => {
                solvePuzzle();
            }}>Solve Puzzle</button>
        </div>
    )
}

export default PuzzleSolver
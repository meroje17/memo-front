import React from "react";
import Case from "../case/Case";
import { levels } from "../../utils/constant";

export function reducer(state, action) {
    switch (action.type) {
        case "ADD_POINT":
            return { ...state, score: state.score + 1 };
        case "CHANGE_LEVEL":
            const nextLevel = state.level + 1;
            return {
                ...state, 
                nbCase: levels[nextLevel].case,
                caseSize: levels[nextLevel].size,
                seconds: levels[nextLevel].seconds,
                level: nextLevel
            }
        default:
            return state;
    }
}

export function randomCase(count) {
    return Math.round(Math.random() * (count - 1));
}

export const inactiveCases = (state) => {
    let casesArray = [];
    for (let index = 0; index < state.nbCase; index++) {
      casesArray.push(
        <Case 
          height={state.caseSize}
          width={state.caseSize}
          type="inactive"
          key={index}
          id={index}
        />
      );
    }
    return casesArray;
}

export const IACases = (index, array, state) => {
    let newCases = [...array];
    newCases[index] = (
        <Case
            height={state.caseSize}
            width={state.caseSize}
            type="active"
            key={index}
        />
    );
    return newCases;
}

export const userCases = (method, state) => {
    let casesArray = [];
    for (let index = 0; index < state.nbCase; index++) {
      casesArray.push(
        <Case
          onClick={event => method(event.target.id)}
          height={state.caseSize}
          width={state.caseSize}
          type="selectionable"
          key={index}
          id={index}
        />
      );
    }
    return casesArray;
}



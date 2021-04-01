import { levels, initialValue } from "../../utils/constant";

export function reducer(state, action) {
  switch (action.type) {
    case "ADD_POINT":
      return { ...state, score: state.score + 1 };
    case "CHANGE_LEVEL":
      let nextLevel = state.level;
      if (state.level < 35) nextLevel++; 
      return {
        ...state,
        nbCase: levels(action.isMobile, nextLevel).case,
        caseSize: levels(action.isMobile, nextLevel).size,
        repeat: levels(action.isMobile, nextLevel).repeat,
        level: nextLevel,
      };
    case "RESET":
      return initialValue(action.isMobile);
    case "UPDATE_SIZE":
      return {...state, caseSize: levels(action.isMobile, state.level).size }
    default:
      return state;
  }
}

export function randomCase(count, base) {
  const random = Math.round(Math.random() * (count - 1));
  if (random === base) {
    return randomCase(count, base);
  } else {
    return random;
  }
}

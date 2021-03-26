import { levels, initialValue } from "../../utils/constant";

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
        repeat: levels[nextLevel].repeat,
        level: nextLevel,
      };
    case "RESET":
      return initialValue;
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

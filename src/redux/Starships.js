export const ADD_STARSHIPS = "ADD_STARSHIPS";

// ACTIONS
export function addStarShips(starships) {
  return {
    type: ADD_STARSHIPS,
    payload: starships,
  };
}

// Reducers
const InitialState = [];

export default function starshipReducer(state = InitialState, action) {
  switch (action.type) {
    case ADD_STARSHIPS:
      return [...action.payload];
    default:
      return state;
  }
}

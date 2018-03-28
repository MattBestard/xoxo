import { Map } from "immutable";
import { log } from "util";
const X = "X";
const O = "O";

const initialState = {
  board: Map(),
  turn: O
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "START":
      return state;
    case "MOVE":
      const newTurn = action.turn === "O" ? "X" : "O";
      return { board: state.board.setIn(action.coords, action.turn), turn: newTurn};
    default:
      return state;
  }
}

export const move = (turn, moveArray) => {
  return {
    type: "MOVE",
    turn,
    coords: moveArray
  };
};

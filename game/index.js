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

/* function streak (board, ...coords) {
  // 1. get board from state


   coords.reduce((accum, coord, index) => {
    if (coord !== accum){

    }
  }, ...coords[0])
  // 2. use streak to compare indexes
      // compare with Xs -> if value returned -> winner
      // compare with Os -> if value returned -> winner
      // board completely full and patterns don't match -> draw
      // if no return after all this, return null -> game ongoing


 } */

/* export function winner (board){

  let diagDown = streak(board, [0, 0], [1, 1], [2, 2]);
  if (diagDown) return diagDown;

  let diagUp = streak(board, [2, 0], [1, 1], [0, 2]);
  if (diagUp) return diagUp;

  let horizondalTop = streak(board, [0, 0], [0, 1], [0, 2])
  if (horizondalTop) return horizondalTop;

  let horizondalMiddle = streak(board, [1, 0], [1, 1], [2, 1])
  if (horizondalMiddle) return horizondalMiddle;

  let horizondalBottom = streak(board, [2, 0], [2, 1], [2, 2])
  if (horizondalBottom) return horizondalBottom;

  let verticalLeft = streak(board, [0, 0], [1, 0], [2, 0])
  if (verticalLeft) return verticalLeft;

  let verticalMiddle = streak(board, [0, 1], [1, 1], [2, 1])
  if (verticalMiddle) return verticalMiddle;

  let verticalRight = streak(board, [0, 2], [1, 2], [2, 2])
  if (verticalRight) return verticalRight;

}  */

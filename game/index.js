import {Map} from 'immutable'
const X = "X";
const O = "O";

const initialState = {
  board: Map(),
  turn: O
}

export default function reducer(state = initialState, action) {
  switch (action.type){
    case "START":
      return state;
    case "MOVE":
    //  return state.board.setIn(?,?)
  }
  return state
}

const move = (turn, moveArray) => {
  return {
    type: "MOVE",
    turn,
    coords: moveArray
  }
}

module.exports = move;


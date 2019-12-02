import { FETCH_TEAM_SUCCESS } from "../actions/teams";
import { DELETE_PLAYER_SUCCESS, PLAYER_CREATE_SUCCESS } from "../actions/player"

export default (state = {}, action = {}) => {
  switch (action.type) {
    case FETCH_TEAM_SUCCESS:
      return { ...action.payload };
    case DELETE_PLAYER_SUCCESS:
    case PLAYER_CREATE_SUCCESS:
      return {...state, players: [...state.players, action.payload]}
    default:
      return state;
  }
};

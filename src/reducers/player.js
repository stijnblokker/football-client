import { FETCH_PLAYER_SUCCESS, CHANGE_TEAM_SUCCESS } from "../actions/player";

export default (state = {}, action = {}) => {
  switch (action.type) {
    case FETCH_PLAYER_SUCCESS:
      return { ...action.payload };
    case CHANGE_TEAM_SUCCESS:
      return {...state, team: action.payload }
    default:
      return state;
  }
};

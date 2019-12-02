import { FETCH_TEAM_SUCCESS } from "../actions/teams";
import { DELETE_PLAYER_SUCCESS } from "../actions/player"

export default (state = {}, action = {}) => {
  switch (action.type) {
    case FETCH_TEAM_SUCCESS:
      return { ...action.payload };

    case DELETE_PLAYER_SUCCESS:
      // console.log('state', state);
      // console.log('action.payload', action.payload);
      
      return { ...state, 
        players: state.players.filter(player => player.id !== action.payload)
      }
      // console.log('newState', newState);

    default:
      return state;
  }
};

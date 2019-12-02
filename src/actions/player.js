import request from "superagent";
const baseUrl = "http://localhost:4000";

export const FETCH_PLAYER_SUCCESS = "FETCH_PLAYER_SUCCESS";
export const CHANGE_TEAM_SUCCESS = "CHANGE_TEAM_SUCCESS"
export const DELETE_PLAYER_SUCCESS = "DELETE_PLAYER_SUCCESS"

const fetchPlayerSuccess = player => ({
  type: FETCH_PLAYER_SUCCESS,
  payload: player
});

export const loadPlayer = id => (dispatch, getState) => {
  request(`${baseUrl}/players/${id}`).then(response => {
    dispatch(fetchPlayerSuccess(response.body));
  });
};

const changeTeamSuccess = team => ({
  type: CHANGE_TEAM_SUCCESS,
  payload: team
});

export const changeTeam = (id, team) => (dispatch, getState) => {
  request
    .put(`${baseUrl}/players/${id}`)
    .send({
      teamId: team
    })
    .catch(console.error);

  request(`${baseUrl}/teams/${team}`).then(response => {
    dispatch(changeTeamSuccess(response.body));
  });
};

const deletePlayerSuccess = player => ({
  type: DELETE_PLAYER_SUCCESS,
  payload: player
})

export const deletePlayer = (id) => (dispatch, getState) => {
  request
    .delete(`${baseUrl}/players/${id}`)
    .then(response => {
      console.log(response);
      dispatch(deletePlayerSuccess(response.body));
    })
    .catch(console.error);
};

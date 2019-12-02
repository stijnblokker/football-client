import request from "superagent";
const baseUrl = "http://localhost:4000";

export const FETCH_PLAYER_SUCCESS = "FETCH_PLAYER_SUCCESS";
export const CHANGE_TEAM_SUCCESS = "CHANGE_TEAM_SUCCESS"
export const DELETE_PLAYER_SUCCESS = "DELETE_PLAYER_SUCCESS"
export const PLAYER_CREATE_SUCCESS = "PLAYER_CREATE_SUCCESS"

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

export const deletePlayer = (id, teamId) => (dispatch, getState) => {
  request
    .delete(`${baseUrl}/players/${id}`)
    .then(response => {
      console.log(response);
      dispatch(deletePlayerSuccess(id));
    })
    .catch(console.error);
};

const playerCreateSuccess = player => ({
  type: PLAYER_CREATE_SUCCESS,
  payload: player
});

export const createPlayer = data => (dispatch, getState) => {
  console.log('create', data);
  
  request
    .post(`${baseUrl}/players`)
    .send({ name: data.name, number: Number(data.number), teamId: Number(data.teamId)})
    .then(response => {
      dispatch(playerCreateSuccess(response.body));
    })
    .catch(console.error);
};
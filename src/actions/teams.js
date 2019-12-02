import request from "superagent";

export const TEAMS_FETCHED = "TEAMS_FETCHED";

const baseUrl = "http://localhost:4000";

const teamsFetched = teams => ({
  type: TEAMS_FETCHED,
  payload: teams
});

export const loadTeams = () => (dispatch, getState) => {
  if (getState().teams.length !== 0) return;

  request(`${baseUrl}/teams`)
    .then(response => {
      dispatch(teamsFetched(response.body));
    })
    .catch(console.error);
};

export const TEAM_CREATE_SUCCESS = "TEAM_CREATE_SUCCESS";

const teamCreateSuccess = team => ({
  type: TEAM_CREATE_SUCCESS,
  payload: team
});

export const createTeam = data => (dispatch, getState) => {
  // const token = getState().auth;
  request
    .post(`${baseUrl}/teams`)
    // .set("Authorization", `Bearer ${token}`)
    .send( {name: data } )
    .then(response => {
      dispatch(teamCreateSuccess(response.body));
    })
    .catch(console.error);
};

export const FETCH_TEAM_SUCCESS = "FETCH_TEAM_SUCCESS";

const fetchTeamSuccess = team => ({
  type: FETCH_TEAM_SUCCESS,
  payload: team
});

export const loadTeam = id => (dispatch, getState) => {
  console.log("CAN WE GET THE STATE??", getState());
  request(`${baseUrl}/teams/${id}`).then(response => {
    console.log(response);
    dispatch(fetchTeamSuccess(response.body));
  });
};

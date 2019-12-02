import React from "react";
import { loadTeams } from "../actions/teams";
import { connect } from "react-redux";
import TeamsList from "./TeamsList";
import CreateTeamFormContainer from "./CreateTeamFormContainer";

class TeamsListContainer extends React.Component {
  componentDidMount() {
    this.props.loadTeams();
  }
  render() {
    return (
      <div>
        <TeamsList teams={this.props.teams} />
        {/* {this.props.loggedIn ? ( */}
          <CreateTeamFormContainer />
         {/* ) : (
           <Link to="/login">Please log in to create teams</Link>
         )} */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    teams: state.teams, // check react devtools, if the component has props.teams
    // loggedIn: state.auth !== null
  };
};

export default connect(
  mapStateToProps,
  { loadTeams }
)(TeamsListContainer);

import React from "react";
import TeamDetails from "./TeamDetails";
import { connect } from "react-redux";
import { loadTeam } from "../actions/teams";

class TeamDetailsContainer extends React.Component {
  componentDidMount() {
    this.props.loadTeam(Number(this.props.match.params.id));
  }
  render() {
    return <TeamDetails team={this.props.team} />;
  }
}

const mapStateToProps = state => ({
  team: state.team
});

export default connect(
  mapStateToProps,
  { loadTeam }
)(TeamDetailsContainer);

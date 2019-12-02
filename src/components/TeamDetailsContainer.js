import React from "react";
import TeamDetails from "./TeamDetails";
import TeamDelete from './TeamDelete'
import { connect } from "react-redux";
import { loadTeam, deleteTeam } from "../actions/teams";

class TeamDetailsContainer extends React.Component {
  state = {
    delete: false
  }
  componentDidMount() {
    this.props.loadTeam(Number(this.props.match.params.id));
  }

  onDelete = event => {
    event.preventDefault();
    if (!this.state.delete) {
      return this.setState({delete: true })
    }
    this.props.deleteTeam(this.props.match.params.id)
    this.props.history.push(`/`);
  }

  render() {
    console.log(this.state);
    
    return (
      <div>
      <TeamDetails team={this.props.team} />
      <TeamDelete
      delete={this.state.delete}
      onSubmit={this.onDelete} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  team: state.team
});

export default connect(
  mapStateToProps,
  { loadTeam, deleteTeam }
)(TeamDetailsContainer);

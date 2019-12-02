import React from "react";
import { connect } from "react-redux";
import { createPlayer } from "../actions/player";
import PlayerForm from "./PlayerForm";

class CreatePlayerFormContainer extends React.Component {
  state = {
    name: '',
    number: '',
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    console.log('new player name', this.state.name);
    
    this.props.createPlayer({name: this.state.name, number: this.state.number, teamId: this.props.team.id});
    this.setState({
      name: '',
      number: ''
    });
  };

  render() {
    return (
      <PlayerForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}

const mapStateToProps = state => ({
  team: state.team
});


export default connect(
  mapStateToProps,
  { createPlayer }
)(CreatePlayerFormContainer);

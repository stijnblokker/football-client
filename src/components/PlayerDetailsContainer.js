import React from "react";
import { connect } from "react-redux";
import { loadPlayer, changeTeam } from "../actions/player";
import { loadTeams } from "../actions/teams"

import PlayerDetails from './PlayerDetails'
import Transfer from './Transfer'

class PlayerDetailsContainer extends React.Component {
    state = {
        id: '',
        newTeam: ''
    };

    componentDidMount() {
        this.props.loadTeams();
        this.props.loadPlayer(Number(this.props.match.params.id));       
    }

    onSubmit = event => {
        event.preventDefault();
        if (!this.state.newTeam) {
            return console.log("no new team selected...");
        }
        this.props.changeTeam(this.state.id, this.state.newTeam);
    };

    onChange = event => {
        this.setState({
            id: this.props.player.id,
            [event.target.name]: Number(event.target.value)
        });
    };

    render() {
        console.log(this.state);
        
        return (
            <div>
                <PlayerDetails player={this.props.player} />
                <Transfer
                    teams={this.props.teams}
                    playerTeam={this.props.player.team && this.props.player.team.id}
                    onChange={this.onChange}
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    player: state.player,
    teams: state.teams
});

export default connect(
    mapStateToProps,
    { loadPlayer, loadTeams, changeTeam }
)(PlayerDetailsContainer);

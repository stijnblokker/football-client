import React from "react";
import { connect } from "react-redux";
import { loadPlayer, changeTeam, deletePlayer } from "../actions/player";
import { loadTeams } from "../actions/teams"

import PlayerDetails from './PlayerDetails'
import Transfer from './Transfer'
import PlayerDelete from './PlayerDelete'

class PlayerDetailsContainer extends React.Component {
    state = {
        id: '',
        newTeam: '',
        delete: false
    };

    componentDidMount() {
        this.props.loadTeams();
        this.props.loadPlayer(Number(this.props.match.params.id));       
    }

    onTransfer = event => {
        event.preventDefault();
        if (!this.state.newTeam) {
            return console.log("no new team selected...");
        }
        this.props.changeTeam(this.state.id, this.state.newTeam);
    };
    
    onDelete = event => {
        event.preventDefault();
        if (!this.state.delete) {
            return this.setState({ id: this.props.player.id, delete: true})
        }
        this.props.deletePlayer(this.state.id, this.props.player.teamId)
        this.props.history.push(`/teams/${this.props.player.teamId}`);
    }

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
                <hr />
                <Transfer
                    teams={this.props.teams}
                    playerTeam={this.props.player.team && this.props.player.team.id}
                    onChange={this.onChange}
                    onSubmit={this.onTransfer}
                />
                
                <hr />
                <PlayerDelete
                delete={this.state.delete}
                onSubmit={this.onDelete} /> 
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
    { loadPlayer, loadTeams, changeTeam, deletePlayer }
)(PlayerDetailsContainer);

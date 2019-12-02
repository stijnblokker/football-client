import React from "react";

function Transfer(props) {
    if (!props.teams || !props.playerTeam) return "Loading";
    
    return (
        <div>
            <h3>transfer</h3>
            <form onSubmit={props.onSubmit}>
                select new team:
            <select name="newTeam" onChange={props.onChange}>
                <option value=''>SELECT TEAM</option>
                    {props.teams
                    .filter(team => team.id !== props.playerTeam)
                    .map(team => {
                       return <option key={team.id} value={team.id}>{team.name}</option>
                    })}
                </select>
                <button>move player</button>
            </form>
        </div>
    );
}

export default Transfer;

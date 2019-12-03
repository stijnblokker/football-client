import React from "react";
import { Link } from 'react-router-dom'

function PlayerDetails(props) {
  if (!props.player.name) return "Loading";

  return (
    <div>
        <h2>{props.player.name} </h2>
        number: {props.player.number} <br />
        team: <Link to={`/teams/${props.player.team.id}`}>{props.player.team.name}</Link>
    </div>
  );
}

export default PlayerDetails;

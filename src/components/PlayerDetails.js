import React from "react";
import { Link } from 'react-router-dom'

function PlayerDetails(props) {
  if (!props.player.name) return "Loading";

  return (
    <div>
        name: {props.player.name} <br />
        number: {props.player.number} <br />
        team: <Link to={`/teams/${props.player.team.id}`}>{props.player.team.name}</Link>
    </div>
  );
}

export default PlayerDetails;

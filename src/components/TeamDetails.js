import React from "react";

import { Link } from 'react-router-dom'

function TeamDetails(props) {
  if (!props.team.name) return "Loading";

  return (
    <div>
      <h2>{props.team.name}</h2>
      <ul>
        {props.team.players.map(player => {
          return (
            <li key={player.id}>
              <Link to={`/players/${player.id}`}>
                {player.number} : {player.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TeamDetails;

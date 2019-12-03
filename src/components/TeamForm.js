import React from "react";

export default function(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <h3>Add a team</h3>
      <label>Team Name</label>
      <input value={props.name} required name="name" onChange={props.onChange} /> <br />
      <button>Add team</button>
    </form>
  );
}

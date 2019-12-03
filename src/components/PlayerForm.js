import React from "react";

export default function(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <h3>Add a play</h3>
      <label>Player name</label>
      <input value={props.name} name="name" onChange={props.onChange} /> <br />
      <label>Player number</label>
      <input value={props.number} name="number" onChange={props.onChange} /> <br />
      <input type="submit" />
    </form>
  );
}

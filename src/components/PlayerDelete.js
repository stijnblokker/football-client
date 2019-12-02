import React from "react";

function PlayerDelete(props) {
    return (
        <div>
            <h3>Delete player</h3>
            <form onSubmit={props.onSubmit}>
                {!props.delete && <button>Delete Player</button>}
                {props.delete && <button>Are you sure?</button>}
            </form>
        </div>
    );
}

export default PlayerDelete;

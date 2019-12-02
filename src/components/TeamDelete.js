import React from "react";

function TeamDelete(props) {
    return (
        <div>
            <h3>Delete team</h3>
            <form onSubmit={props.onSubmit}>
                {!props.delete && <button>Delete Team</button>}
                {props.delete && <button>Are you sure?</button>}
            </form>
        </div>
    );
}

export default TeamDelete;

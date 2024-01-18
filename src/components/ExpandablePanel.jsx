import React from "react";

export default function ExpandablePanel({ user }) {
    return (
        <div>
            <div style={{display: 'flex'}}>
                <h4>Albums By {user.name}</h4>
                <button>add album</button>
            </div>
        </div>
    );
}

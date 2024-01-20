import React from "react";
import UserAlbum from "./UserAlbum";

export default function ExpandablePanel({ user }) {
    return (
        <div>
            <UserAlbum user={user} />
        </div>
    );
}

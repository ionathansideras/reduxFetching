import React, { useState } from "react";
import { deleteUser } from "../redux/store";
import { useDispatch } from "react-redux";
import ExpandablePanel from "./ExpandablePanel.jsx";

export default function UsersListItem({ user }) {
    const [isExpend, setIsExpend] = useState(false);
    const dispatch = useDispatch();

    function handleDelete(user) {
        dispatch(deleteUser(user));
    }

    function handleExpend() {
        setIsExpend(!isExpend);
    }

    return (
        <>
            <div style={{ display: "flex" }}>
                <button onClick={() => handleDelete(user)}>x</button>
                <div>{user.name}</div>
                <button onClick={handleExpend}>{">"}</button>
            </div>

            {isExpend && <ExpandablePanel user={user} />}
        </>
    );
}

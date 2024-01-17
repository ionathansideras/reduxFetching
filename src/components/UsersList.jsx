import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, addUser } from "../redux/store";
import Button from "./Button.jsx";

export default function UsersList() {
    const dispatch = useDispatch();
    const { data, error, isLoading } = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    const handleUserAdd = () => {
        dispatch(addUser());
    };
    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error</div>;
    }

    const renderedUsers = data.map((user) => {
        return (
            <div key={user.id} style={{ display: "flex" }}>
                <button>x</button>
                <div>{user.name}</div>
                <button>{">"}</button>
            </div>
        );
    });
    return (
        <div>
            <div>
                <Button onClick={handleUserAdd}>add user</Button>
             </div>
            {renderedUsers}
        </div>
    );
}

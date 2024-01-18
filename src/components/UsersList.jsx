import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, addUser, deleteUser } from "../redux/store";
import Button from "./Button.jsx";
import UsersListItem from "./UsersListItem.jsx";

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

    return (
        <div>
            <div>
                <Button onClick={handleUserAdd}>add user</Button>
            </div>
            {data.map((user) => (
                <UsersListItem key={user.id} user={user} />
            ))}
        </div>
    );
}

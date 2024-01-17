import {usersReducer} from "./slices/usersSlice";
import { configureStore } from "@reduxjs/toolkit";
import { fetchUsers } from "./thunks/fetchUsers";
import { addUser } from "./thunks/addUser";

const store = configureStore({
    reducer: {
        users: usersReducer,
    },
});

export default store;
export { fetchUsers, addUser }

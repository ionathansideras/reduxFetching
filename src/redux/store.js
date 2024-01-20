// Importing necessary functions and slices from Redux Toolkit and other local files
import { usersReducer } from "./slices/usersSlice";
import { configureStore } from "@reduxjs/toolkit";
import { fetchUsers } from "./thunks/fetchUsers";
import { addUser } from "./thunks/addUser";
import { deleteUser } from "./thunks/deleteUser";
import { setupListeners } from "@reduxjs/toolkit/query";
import {
    albumsApi,
    useFetchAlbumsQuery,
    useAddAlbumMutation,
    useDeleteAlbumMutation,
} from "./apis/albumsApi";
import photosApi, {
    useFetchPhotosQuery,
    useAddPhotoMutation,
    useDeletePhotoMutation,
} from "./apis/photosApi";

// Configuring the Redux store
const store = configureStore({
    // 'reducer' is an object that defines the reducers in the Redux store
    reducer: {
        // 'users' is a slice of the Redux store managed by the 'usersReducer'
        users: usersReducer,

        // 'albums' is a slice of the Redux store managed by the 'albumsApi' reducer
        // The name 'albums' has to be the same as the 'reducerPath' in 'albumsApi'
        // and the reducers are the same as the 'endpoints' in 'albumsApi'
        albums: albumsApi.reducer,
        // aditionaly we can call the reducerPath as the name of the slice
        // this prevents fouter errors
        [photosApi.reducerPath]: photosApi.reducer,
    },

    // 'middleware' is an array of Redux middleware
    // Here, it gets the default middleware and adds the 'albumsApi' middleware
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(albumsApi.middleware)
            .concat(photosApi.middleware),
});

// Setting up listeners for the Redux store
// These listeners can react to actions dispatched to the Redux store
setupListeners(store.dispatch);

// Exporting the Redux store as the default export
export default store;

// Exporting other functions and hooks for use elsewhere in the application
export {
    fetchUsers,
    addUser,
    deleteUser,
    useFetchAlbumsQuery,
    useAddAlbumMutation,
    useDeleteAlbumMutation,
    useFetchPhotosQuery,
    useAddPhotoMutation,
    useDeletePhotoMutation,
};

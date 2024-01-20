import React from "react";
import { useFetchAlbumsQuery, useAddAlbumMutation } from "../redux/store";
import RenderAlbums from "./RenderAlbums";

export default function UserAlbum({ user }) {
    const { data, error, isLoading} = useFetchAlbumsQuery(user);
    const [addAlbum, results] = useAddAlbumMutation();

    console.log();

    const handleAddAlbum = () => {
        addAlbum(user);
    };

    if (error) {
        return <p>Something went wrong...</p>;
    }

    return (
        <>
            <div style={{ display: "flex" }}>
                <h4>Albums By {user.name}</h4>
                <button onClick={handleAddAlbum}>add album</button>
            </div>
            {isLoading ? <p>Loading...</p> : <RenderAlbums data={data} />}
        </>
    );
}

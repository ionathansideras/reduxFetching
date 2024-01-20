import React, { useState } from "react";
import { useDeleteAlbumMutation } from "../redux/store";
import RenderPhotos from "./RenderPhotos";

export default function RenderAlbums({ data }) {
    const [deleteAlbum, results] = useDeleteAlbumMutation();
    const [isExtended, setIsExtended] = useState(Array(data.length).fill(false));

    const handleDelete = (album) => {
        deleteAlbum(album);
    };

    const toggleIsExtended = (index) => {
        const newIsExtended = [...isExtended];
        newIsExtended[index] = !newIsExtended[index];
        setIsExtended(newIsExtended);
    };

    return (
        <div>
            {data.map((album, index) => {
                return (
                    <div key={album.id}>
                        <div style={{ display: "flex" }}>
                            <button onClick={() => handleDelete(album)}>
                                x
                            </button>
                            <h4>{album.title}</h4>
                            <button onClick={() => toggleIsExtended(index)}>
                                {">"}
                            </button>
                        </div>
                        {isExtended[index] && <RenderPhotos album={album} />}
                    </div>
                );
            })}
        </div>
    );
}
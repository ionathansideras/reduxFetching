import React from "react";
import { useFetchPhotosQuery, useAddPhotoMutation,useDeletePhotoMutation } from "../redux/store";

export default function RenderPhotos({ album }) {
    const { data, error, isLoading } = useFetchPhotosQuery(album);
    const [deletePhoto] = useDeletePhotoMutation();
    const [addPhoto] = useAddPhotoMutation();

    const handleDelete = (photo) => {
        deletePhoto(photo);
    };
    return (
        <div>
            <button
                onClick={() => {
                    addPhoto(album);
                }}
            >
                add photo
            </button>
            <div style={{ display: "flex" }}>
                {isLoading
                    ? null
                    : data.map((photo) => {
                          return (
                              <div key={photo.id}>
                                    <button onClick={() => handleDelete(photo)}>x</button>
                                  <img src={photo.url} />
                              </div>
                          );
                      })}
                ;
            </div>
        </div>
    );
}

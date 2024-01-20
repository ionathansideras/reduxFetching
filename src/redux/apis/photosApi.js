// Importing necessary functions from Redux Toolkit Query and Faker library
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";

// Creating an API slice using Redux Toolkit Query
const photosApi = createApi({
    reducerPath: "photos",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3005" }),
    endpoints(builder){
        return {
            fetchPhotos: builder.query({
                providesTags: (result, error, album) => {
                    const tags = result.map((photo) => ({
                        type: "Photos",
                        id: photo.id,
                    }));
                    tags.push({ type: "AlbumPhoto", id: album.id });
                    return tags;
                },
                query: (album) => {
                    return {
                        url: `/photos`,
                        params: {
                            albumId: album.id,
                        },
                        method: "GET",
                    };
                },
            }),
            addPhoto: builder.mutation({
                invalidatesTags: (result, error, album) => {
                    return [{ type: "AlbumPhoto", id: album.id }];
                },
                query: (album) => {
                    return {
                        url: `/photos`,
                        method: "POST",
                        body: {
                            albumId: album.id,
                            url: faker.image.abstract(150, 150, true),
                        },
                    };
                },
            }),
            deletePhoto: builder.mutation({
                invalidatesTags: (result, error, photo) => {
                    return [{ type: "Photos", id: photo.id }];
                },
                query: (photo) => {
                    return {
                        url: `/photos/${photo.id}`,
                        method: "DELETE",
                    };
                },
            }),
        }
    }
});

export const { useFetchPhotosQuery, useAddPhotoMutation, useDeletePhotoMutation } = photosApi;
export default photosApi;
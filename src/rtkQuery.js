import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const meetingRoomApi = createApi({
    reducerPath: 'meetingRoomApi',
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
    endpoints: (builder) => ({
       
        rooms: builder.query({
            query: () => '/rooms'
        }),
        
        addrooms: builder.mutation({
            query: (room) => ({
                url: "/rooms",
                method: "POST",
                body: room,
            })
        }),
        editroom: builder.mutation({
            query: (room) => ({
                url: `/rooms/${room.id}`,
                method: 'PUT',
                body: room
            })
        }),
        deleteRoom: builder.mutation({
            query: (id) => ({
                url: `/rooms/${id}`,
                method: 'DELETE',
            })
        }),
    })
})

export const { useLoginQuery, useSignupMutation, useRoomsQuery,
    useAddroomsMutation, useEditroomMutation, useDeleteRoomMutation,
    useBookingsQuery, useAddbookingMutation, useEditbookingMutation, useDeleteBookingMutation,
    useGetusersQuery, useAddusersMutation, useEdituserMutation, useDeleteUserMutation,
    useGetroombookingsQuery, useUserbookingsMutation} = meetingRoomApi;
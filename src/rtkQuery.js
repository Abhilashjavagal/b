import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const meetingRoomBookingApi = createApi({
    reducerPath: 'meetingRoomBookingApi',
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
    endpoints: (builder) => ({
        login: builder.query({
            query: (credentials) => `/users?email=${credentials.email}&password=${credentials.password}`
        }),
        signup: builder.mutation({
            query: (user) => ({
                url: '/users',
                method: 'POST',
                body: user,
            }),
        }),
       
        
        bookings: builder.query({
            query: () => "/bookings"
        }),
        addbooking: builder.mutation({
            query: (booking) => ({
                url: "/bookings",
                method: "POST",
                body: booking,
            })
        }),
        editbooking: builder.mutation({
            query: (booking) => ({
                url: `/rooms/${booking.id}`,
                method: 'PUT',
                body: booking
            })
        }),
        deleteBooking: builder.mutation({
            query: (id) => ({
                url: `/bookings/${id}`,
                method: 'DELETE',
            })
        }),
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

        getusers : builder.query({
            query: () => "/users"
        }),
        addusers : builder.mutation({
            query: (user) => ({
                url: "/users",
                method:"POST",
                body: user
            })
        }),
        edituser : builder.mutation({
            query: (user) => ({
                url: `/users/${user.id}`,
                method: 'PUT',
                body: user
            })
        }),
        deleteUser: builder.mutation({
            query: (id) => ({
                url: `/users/${id}`,
                method: 'DELETE',
            })
        }),

        getroombookings: builder.query ({
            query:() => "/userBookings"
        })
    })
})

export const { useLazyLoginQuery, useSignupMutation , useRoomsQuery,
    useAddroomsMutation, useEditroomMutation, useDeleteRoomMutation, useEdituserMutation,
    useBookingsQuery, useAddbookingMutation, useEditbookingMutation, useDeleteBookingMutation,
    useGetusersQuery, useAddusersMutation, useDeleteUserMutation, useGetroombookingsQuery} = meetingRoomBookingApi;
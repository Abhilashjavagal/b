import { configureStore } from "@reduxjs/toolkit";
import { meetingRoomBookingApi } from '../rtkQuery';

export const store = configureStore({
    reducer: {
        [meetingRoomBookingApi.reducerPath]: meetingRoomBookingApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(meetingRoomBookingApi.middleware),
})
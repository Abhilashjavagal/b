import { configureStore } from "@reduxjs/toolkit";
import { meetingRoomApi } from '../rtkQuery';

export const store = configureStore({
    reducer: {
        [meetingRoomApi.reducerPath]: meetingRoomApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(meetingRoomApi.middleware),
})
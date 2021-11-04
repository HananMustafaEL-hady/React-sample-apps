import { configureStore } from "@reduxjs/toolkit";
import reservationsSliceReducer from './../features/reservationsSlice';
export const store =configureStore({
    reducer:{
reservations:reservationsSliceReducer,
    }
})

export type RootState= ReturnType<typeof store.getState>
export type AppDispatch= typeof store.dispatch

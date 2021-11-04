import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "../features/customerSlice"
import reservationsSliceReducer from './../features/reservationsSlice';
export const store =configureStore({
    reducer:{
reservations:reservationsSliceReducer,
customer:customerReducer
    }
})

export type RootState= ReturnType<typeof store.getState>
export type AppDispatch= typeof store.dispatch

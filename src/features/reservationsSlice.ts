import {createSlice , PayloadAction} from "@reduxjs/toolkit"

interface ReservationState{
    value:string[]
}
const initialState:ReservationState={
    value:  []
}
export const reservationsSlice = createSlice({
    name:"reservations",
    initialState,
    reducers:{
        addReservations:(state,action:PayloadAction<string>)=>{
state.value.push(action.payload)
        },
        removeReservations:(state,action:PayloadAction<number>)=>{
            state.value.splice(action.payload,1)

                    }
    }
})

export const {addReservations ,removeReservations}=reservationsSlice.actions
export default reservationsSlice.reducer
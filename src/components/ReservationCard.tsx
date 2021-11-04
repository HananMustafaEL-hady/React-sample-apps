import React from 'react'
import {useDispatch} from "react-redux"
import { removeReservations } from '../features/reservationsSlice'
interface ReservationCardTypes{
    name:string;
    index:number

}
export default function ReservationCard({name,index}:ReservationCardTypes) {
  const dispatch = useDispatch()
  
    return<div onClick={()=>{
        dispatch(removeReservations(index))

    }} className="reservation-card-container">{name}</div>

}

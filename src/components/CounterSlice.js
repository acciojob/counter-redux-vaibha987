import store from "../Store";
import { createSlice } from '@reduxjs/toolkit';

const counterSlice=createSlice({
    name:"counter",
    initialState:{
     count:0   
    },
    reducers:{
        increment:(state,action)=>{
        state.count=state.count+1
        },
        decrement:(state,action)=>{
         state.count=state.count-1
        }
    }
})

export const {increment,decrement} = counterSlice.actions
export default counterSlice.reducer

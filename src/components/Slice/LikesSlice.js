import {createSlice} from '@reduxjs/toolkit'

const LikesSlice = createSlice(
    {
        name : "likes",
        initialState : {
            value : 0
        },
        reducers : {
            increment : (state)=>{
                state.value = state.value + 1;
            }
        }
    }
)


export const {increment} = LikesSlice.actions

export default LikesSlice.reducer;
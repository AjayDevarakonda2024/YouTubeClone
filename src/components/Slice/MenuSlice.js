import { createSlice } from "@reduxjs/toolkit";

const MenuSlice = createSlice(
    {
        name : "menu",
        initialState : {
            page : "home"
        },
        reducers : {
            menu : (state, action)=>{
               state.page = action.payload
            }
        }
    }
)

export const {menu} = MenuSlice.actions

export default MenuSlice.reducer
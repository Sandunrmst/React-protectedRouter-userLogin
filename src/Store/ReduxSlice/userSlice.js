import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState= {
    user:{
        name:"sandun",
    }
}

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers:{
        addUsers:(state, action) => {
            state.user = action.payload
        },
        removeUser:(state, action) => {
            state.user = {}
        }
    }
})

export const {addUsers, removeUser} = userSlice.actions

export const userSelector = createSelector([(store)=> store.user.user], (user)=> user)

export default userSlice.reducer
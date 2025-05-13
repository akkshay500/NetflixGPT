import { createSlice } from "@reduxjs/toolkit";

const appConfigSlice = createSlice({
    name:"appConfig",
    initialState:{
        preferredLanguage:"en",
    },
    reducers:{
        setPreferredLanguage:(state,action)=>{
            state.preferredLanguage = action.payload;
        },
    }
});

export const {setPreferredLanguage} = appConfigSlice.actions;
export default appConfigSlice.reducer;
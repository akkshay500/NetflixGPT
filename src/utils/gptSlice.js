import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        isGptSearch:false,
        gptSearchResultMoviesNames:null,
        gptSearchResultMovies:null
    },
    reducers:{
        setGptSearch:(state)=>{
            state.isGptSearch = !state.isGptSearch;
        },
        setGptMovies:(state,action)=>{
            state.gptSearchResultMoviesNames = action.payload.moviesNames;
            state.gptSearchResultMovies = action.payload.moviesList;
        },
        
    }
})

export const {setGptSearch, setGptMovies} = gptSlice.actions;
export default gptSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({

    name:"movies",
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        videoTrailer:null
    },
    reducers:{
        addNowPlayingMovies:(state,action) =>{
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action)=>{
            state.popularMovies = action.payload;
        },
        addUpcomingMovies:(state,action)=>{
            state.upcomingMovies = action.payload;
        },
        addVideoTrailer:(state,action)=>{
            state.videoTrailer = action.payload;
        }
    }
}); 

export const{addNowPlayingMovies, addPopularMovies, addUpcomingMovies, addVideoTrailer} = moviesSlice.actions;
export default moviesSlice.reducer;
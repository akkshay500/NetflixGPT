import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addPopularMovies } from "../utils/moviesSlice";


const usePopularMovies = () =>{
    const dispatch = useDispatch();
    const popularMovies = useSelector(store=> store.movies.popularMovies)
    const getPopularMovies = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
        // console.log(json);
        dispatch(addPopularMovies(json?.results));
    }

    useEffect(()=>{
        // The below code is used to check if the popularMovies is null or undefined, if it is then it will call the getPopularMovies function to fetch the data from the API.
        // this concept is called as memoization.
        !popularMovies && getPopularMovies();
    },[]);
}

export default usePopularMovies;
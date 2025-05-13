import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addVideoTrailer } from "../utils/moviesSlice";

const useMovieTrailer = (id)=>{
    const dispatch = useDispatch();
    
    const trailerVideo = useSelector((store) => store.movies.videoTrailer);
    
    const getVideoTrailer = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/'+id+'/videos?language=en-US', API_OPTIONS);
        const json = await data.json();
        // console.log(json.results);
        const filterData = json.results.filter((video) => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        dispatch(addVideoTrailer(trailer));
    }

    useEffect(()=>{
       !trailerVideo && getVideoTrailer();
    },[])
}

export default useMovieTrailer;
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    
    // This is also called as early return, it means that if the movies object is empty, return without executing below line of code.
    if (!movies) return;
    
    const mainMovie = movies[1];
    const {id, original_title, overview} = mainMovie;
    return(
        <div className="">
            <VideoTitle title={original_title} overview={overview}/>
            <VideoBackground movieId={id}/>
        </div>
    )
}

export default MainContainer;
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = ()=>{
    const movies = useSelector((store)=> store.movies);
    return( 
        <div className="bg-black">
            <div className=" mt-0 md:-mt-44 px-2 md:pl-6 relative z-20">
            <MovieList title={"Now Playing"} movies = {movies?.nowPlayingMovies}/>
            <MovieList title={"Top Rated"} movies = {movies?.popularMovies}/>
            <MovieList title={"Upcoming Movies"} movies = {movies?.upcomingMovies}/>
        </div>
        </div>
    )
}

export default SecondaryContainer;
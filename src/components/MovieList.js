import MovieCard from "./MovieCard";

const MovieList = ({title, movies})=>{
    return( movies && 
<div className="text-white">
    <h1 className="text-lg md:text-2xl py-4 text-white">{title}</h1>
    <div className="flex overflow-x-scroll">
        <div className="flex">
    {movies.map((movie) =>
         <MovieCard key={movie.key} posterid={movie.poster_path} />
    )}
    </div>
    </div>
</div>)
}

export default MovieList;
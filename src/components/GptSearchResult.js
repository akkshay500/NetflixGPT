import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptSearchResult = ()=>{

    const {gptSearchResultMoviesNames, gptSearchResultMovies} = useSelector(store => store.gpt);
    if(!gptSearchResultMoviesNames || !gptSearchResultMovies) return null;
    const moviesNameList = gptSearchResultMoviesNames.split(",");
    return( 
        <div>
            {
            moviesNameList.map((movie,index)=> (<MovieList key={movie} title={movie.original_title} movies={gptSearchResultMovies[index]}/>))
            }
        </div>
        )
    
}

export default GptSearchResult;
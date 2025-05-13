import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import client from "../utils/openai";
import { API_OPTIONS, DEPLOYMENT } from "../utils/constants";
import { setGptMovies } from "../utils/gptSlice";

const GptSearchBar = ()=>{
    const preferredLang = useSelector(store=>store.appConfig.preferredLanguage);
    const searchText = useRef(null);
    const dispatch = useDispatch();

    const searchTMDBMovies = async (movie) => {
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS)
        const json = await data.json();
        return json.results;
    }

    const handleSearchButtonClick = async ()=>{
        const searchQuery = searchText.current.value;
        console.log(searchQuery);

        const query = "You are a movie recommendation engine. Based on the query, provide a list of 5 movies with only comma separated movie names like the example shown ahead. Example: 'Raaz, Golmaal, Race, Don, Piku'. Query: "+searchQuery;

        if(searchQuery.length > 0){
            const completion = await client.chat.completions.create({
                model: DEPLOYMENT,
                messages: [
                  { role: 'user', content: query },
                ],
              });
            
            const moviesNames = completion.choices?.[0]?.message?.content;
            const moviesNamesArray = moviesNames?.split(',');
            console.log(moviesNames);
            const promiseArray = moviesNamesArray.map(movie => searchTMDBMovies(movie));
            const moviesList = await Promise.all(promiseArray);
            dispatch(setGptMovies({moviesNames: moviesNames, moviesList: moviesList}));
        }
    }
    return (
        <div className="flex justify-center items-center h-80">
            <div className="bg-gray-700 w-6/12 grid grid-cols-12 opacity-90">
                <input ref={searchText} type="text" className="p-2 m-2 col-span-10" placeholder={lang[preferredLang].searchPlaceholder}/>
                <button onClick={handleSearchButtonClick} className="p-2 m-2 bg-red-700 col-span-2 text-white font-bold">{lang[preferredLang].search}</button>
            </div>
        </div>
    )
}

export default GptSearchBar;
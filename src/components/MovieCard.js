import { MOVIE_IMG } from "../utils/constants";

const MovieCard = ({posterid})=>{
    return(
        
        <div className="bg-black w-36 md:w-48 pr-4 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
            <img className="w-96" alt="movieimage" src={MOVIE_IMG +posterid }/>
        </div>
    )
}

export default MovieCard;
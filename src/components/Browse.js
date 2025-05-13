import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSearchPage from './GptSearchPage';
import { useSelector } from 'react-redux';

const Browse = () => {
    
    const isGptSearch = useSelector(store=> store.gpt.isGptSearch);
    useNowPlayingMovies();
    usePopularMovies();
    useUpcomingMovies();
    
    return(
    <div className='w-screen'>
        <Header />
        {isGptSearch ? <GptSearchPage/> : 
            <>
                <MainContainer/>
                <SecondaryContainer/>
            </>
        }
        
    </div>
)
}

export default Browse;
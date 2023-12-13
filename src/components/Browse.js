import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopulerMovies from '../hooks/usePopulerMovies';
import GptSearch from './GptSearch';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  const showGptToggle = useSelector(store => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopulerMovies();
  
  return (
    <>
      <Header />
      {
        showGptToggle ? <GptSearch /> : <><MainContainer /><SecondaryContainer /></>
      }
    </>
  )
}

export default Browse;
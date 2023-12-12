import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopulerMovies from '../hooks/usePopulerMovies';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {

  useNowPlayingMovies();
  usePopulerMovies();
  
  return (
    <>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </>
  )
}

export default Browse;
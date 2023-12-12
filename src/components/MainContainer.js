import React from 'react';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';
import { useSelector } from 'react-redux';

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    if(!movies) return;

    const genrateRandomIndex = (min,max)=>{
      let difference = max - min;
      // generate random number 
      let rand = Math.random();
      // multiply with difference 
      rand = Math.floor( rand * difference);
      // add with min value 
      rand = rand + min;
      return rand;
      }

    const mainMovie = movies[genrateRandomIndex(0,movies.length)];
    const {original_title,overview,id} = mainMovie;

    

  return (
    <>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground videoId={id}/>
    </>
  )
}

export default MainContainer;
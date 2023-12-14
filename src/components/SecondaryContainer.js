import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector(store=>store.movies.nowPlayingMovies);
  const populerMovies = useSelector(store=>store.movies.populerMovies)
  return movies && (
      <div className='bg-black'>
        <div className='-mt-10 md:-mt-72 md:ml-10 m-4'>
        <MovieList title="Now Playing" movies={movies}/>
      <MovieList title="Top Rated" movies={populerMovies}/>
      <MovieList title="South Movie" movies={movies}/>
      <MovieList title="New Movie" movies={movies}/>
      <MovieList title="Action" movies={movies}/>
        </div>
      </div>
  )
}
export default SecondaryContainer;
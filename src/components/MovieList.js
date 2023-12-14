import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
  return (
    <>
      <h1 className='md:ml-4 text-xl md:text-3xl text-white py-6'>{title}</h1>
        <div className='flex overflow-hidden hover:overflow-x-scroll'>
            <div className='flex'>
                {movies?.map((movie)=> <MovieCard key={movie.id} posterPath={movie.poster_path}/>)}
            </div>
        </div>
    </>
  )
}

export default MovieList;
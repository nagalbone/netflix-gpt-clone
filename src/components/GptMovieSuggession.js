import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GptMovieSuggession = () => {
    const {movieNames,movieResults} = useSelector(store=>store.gpt);
    if(!movieNames) return null;

    return (
        <div className='bg-black  bg-opacity-80 p-2 md:p-4 md:m-4 m-2'>
          <div className=''>
            {
              movieNames.map((names,index)=><MovieList key={names} title={names} movies={movieResults[index]}/>)
            }
          </div>
        </div>
    )
}

export default GptMovieSuggession;
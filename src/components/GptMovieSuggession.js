import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GptMovieSuggession = () => {
    const {movieNames,movieResults} = useSelector(store=>store.gpt);
    if(!movieNames) return null;

    return (
        <div className='bg-black  bg-opacity-80 p-4 m-4'>
          <div className=' ml-10'>
            {
              movieNames.map((names,index)=><MovieList key={names} title={names} movies={movieResults[index]}/>)
            }
          </div>
        </div>
    )
}

export default GptMovieSuggession;
import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggession from './GptMovieSuggession';
import { BG_IMG } from '../utils/constants';

const GptSearch = () => {
  return (
    <>
    <div className='fixed -z-10'>
    <img src={BG_IMG} alt='backbrond ing' />
    </div>
    <GptSearchBar />
    <GptMovieSuggession />
    </>
  )
}

export default GptSearch;
import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggession from './GptMovieSuggession';

const GptSearch = () => {
  return (
    <>
    <div className='absolute -z-10'>
    <img src='https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='backbrond ing' />
    </div>
    <GptSearchBar />
    <GptMovieSuggession />
    </>
  )
}

export default GptSearch;
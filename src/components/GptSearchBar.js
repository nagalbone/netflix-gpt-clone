import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { lang } from '../utils/langConstants';
import { MOVIE_API_OPTIONS, openai } from '../utils/constants';
import { addTmdbMovieResults } from '../slices/gptSearchSlice';
const GptSearchBar = () => {
  const [loading,setLoading] = useState(false);
  const dispatch = useDispatch();
  const searchText = useRef("");
    const langKey = useSelector(store=> store.config.langauge);

    const getTmdbMoviesData = async (movie)=>{
      const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', MOVIE_API_OPTIONS);
      const json = await data.json();
      return json.results;
    }

    const handleGptSearch = async ()=>{
      setLoading(true);
      const query = "Act as movie recommendation system and suggest some movie for the query : "+searchText.current.value+"only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: tiger,animal,golmaal,don,gadar";
      const gptResult = await openai.chat.completions.create({
        messages: [{ role: 'user', content: query }],
        model: 'gpt-3.5-turbo',
      });
      const moviesArray = gptResult?.choices[0]?.message?.content.split(",");
      const promiseArr = moviesArray.map((movie)=> getTmdbMoviesData(movie));
      const moviesList = await Promise.all(promiseArr);
      dispatch(addTmdbMovieResults({movieNames:moviesArray,movieResults:moviesList}));
      setLoading(false);
    }
  return (
    <div className='pt-[10%] flex justify-center'>

        <form className='grid grid-cols-12 bg-black w-1/2 p-2 bg-opacity-70' onSubmit={(e)=> e.preventDefault()}>
            <input type='text' className="col-span-9 p-3 m-2" placeholder={lang[langKey].searchPlaceholder} ref={searchText} required/>
            <button className='col-span-3 bg-red-600 p-3 m-2 px-4 rounded-lg text-white' disabled={loading} onClick={handleGptSearch}>{loading ? "Loading..." : lang[langKey].searchButton}</button>
        </form>
    </div>
  )
}

export default GptSearchBar;
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../slices/moviesSlice";
import { useEffect } from "react";
import { MOVIE_API_OPTIONS } from "../utils/constants";

const useNowPlayingMovies = ()=>{
    const dispatch =useDispatch();
    const nowPlayingMovies = useSelector(store=> store.movies?.nowPlayingMovies)
  useEffect(()=>{
    !nowPlayingMovies && getNowPlayingMovies();
  },[]);

  const getNowPlayingMovies = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', MOVIE_API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  }
}

export default useNowPlayingMovies;
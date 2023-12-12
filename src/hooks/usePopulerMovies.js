import { useDispatch } from "react-redux";
import { addPopulerMovies } from "../slices/moviesSlice";
import { useEffect } from "react";
import { MOVIE_API_OPTIONS } from "../utils/constants";

const usePopulerMovies = ()=>{
    const dispatch = useDispatch();

  useEffect(()=>{
    getPopulerMovies();
  },[]);

  const getPopulerMovies = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', MOVIE_API_OPTIONS);
    const json = await data.json();
    dispatch(addPopulerMovies(json.results));
  }
}

export default usePopulerMovies;
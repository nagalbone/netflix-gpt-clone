import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTrailer } from '../slices/moviesSlice';
import { MOVIE_API_OPTIONS } from '../utils/constants';

const useMovieTrailer = (videoId) => {
    const dispatch = useDispatch();
    const trailer = useSelector(store=> store.movies?.trailer)

    useEffect(()=>{
        getVideo();
    },[]);

    const getVideo = async ()=>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${videoId}/videos`, MOVIE_API_OPTIONS);
        const json = await data.json();
        const filterData = json.results.filter(video => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        dispatch(addTrailer(trailer));
    }

  return (
    <div>useMovieTrailer</div>
  )
}

export default useMovieTrailer;
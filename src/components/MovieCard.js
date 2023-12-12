import React from 'react'
import { API_IMG_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 ml-4'>
        <img src={API_IMG_URL + posterPath} alt='image'/>
    </div>
  )
}

export default MovieCard
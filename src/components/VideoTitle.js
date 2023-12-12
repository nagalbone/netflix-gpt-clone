import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='mt-[15%] ml-20 p-12 absolute text-white'>
        <h1 className='text-4xl font-bold'>{title}</h1>
        <p className='mt-5 w-1/4'>{overview}</p>
        <div className='mt-5'>
            <button className='bg-gray-600 p-3 w-24 text-black bg-white hover:bg-opacity-80'>Play</button>
            <button className='bg-gray-600 p-3 w-24 text-white ml-2'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle;
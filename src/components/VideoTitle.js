import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='mt-[25%] md:mt-[15%] ml-1 md:ml-20 p-12 absolute text-white'>
        <h1 className='text-xl md:text-4xl font-bold'>{title}</h1>
        <p className='hidden sm:hidden md:block mt-5 w-1/4'>{overview}</p>
        <div className='mt-2 md:mt-5 md:flex'>
            <button className='bg-gray-600 md:p-3 p-1 w-16 md:w-24 text-black bg-white hover:bg-opacity-80'>Play</button>
            <button className='bg-gray-600 p-3 w-24 text-white ml-2 hidden md:block'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle;
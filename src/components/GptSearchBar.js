import React from 'react'

const GptSearchBar = () => {
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='grid grid-cols-12 bg-black w-1/2 p-2'>
            <input type='text' className="col-span-9 p-2 m-2" placeholder='What would you like to search?'/>
            <button className='col-span-3 bg-red-700 p-2 m-2 px-4 rounded-lg text-white'>Search</button>
        </form>
    </div>
  )
}

export default GptSearchBar;
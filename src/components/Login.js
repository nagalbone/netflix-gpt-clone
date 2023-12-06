import React, { useState } from 'react'
import Header from './Header';

const Login = () => {
    const [isSignIn,setIsSignIn] = useState(true);


  return (
    <div className='relative'>
        <Header/>
        <div className='bg-black absolute w-[400px] my-32 p-14 m-auto left-0 right-0 text-white bg-opacity-80'>
            <form>
                <h1 className='font-semibold mb-4 text-3xl'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
                {!isSignIn && <input type='text' placeholder='Full Name' className='p-2 py-3 my-4 w-full bg-gray-600'/>}
                <input type='text' placeholder='Email or phone number' className='p-2 py-3 my-4 w-full bg-gray-600'/>
                <input type='password' placeholder='Password' className='p-2 py-3 my-4 w-full bg-gray-600'/>
                <button className='py-3 my-6 w-full bg-red-600 rounded-lg'>{isSignIn ? "Sign In" : "Sign Up"}</button>
            </form>
            <p className='cursor-pointer mb-10' onClick={()=> setIsSignIn(!isSignIn)}>
            {isSignIn ? "New to Netflix? Sign Up Now" : "Already User? Sign In"}
            </p>
        </div>
        <img className="bg-opacity-80" src='https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='backbrond ing' />

    </div>
  )
}

export default Login;
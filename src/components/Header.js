import React, { useEffect } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../slices/loginSlice';
import { useNavigate } from 'react-router-dom';
import { LOGO, USER_LOGO } from '../utils/constants';


const Header = () => {
  const user = useSelector(store => store.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signOutUser = ()=>{
    signOut(auth).then(() => { }).catch((error) => {
      // An error happened.
    });
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName}));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return ()=> unsubscribe();
  },[]);
  
  return (
    <div className='flex justify-between bg-gradient-to-b from-black'>
      
      <div >
      <img className="w-44 ml-5 absolute" src={LOGO} alt='logo' />
      </div>
        
    <div>
    {user && 
    <div className='flex'><img src={USER_LOGO} alt='logo icon' className='m-2 w-8 h-8'/>
    <button className="m-2 px-2 text-white font-semibold bg-red-600 rounded-lg" onClick={signOutUser}>Sign Out</button></div> }
    </div>

    </div>
  )
}

export default Header;
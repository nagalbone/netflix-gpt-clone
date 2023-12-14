import React, { useEffect } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../slices/loginSlice';
import { useNavigate } from 'react-router-dom';
import { LOGO, USER_LOGO,SUPPORTED_LANG } from '../utils/constants';
import { toggleGptSearch } from '../slices/gptSearchSlice';
import { changeLanguage } from '../slices/configSlice';

const Header = () => {
  const user = useSelector(store => store.login);
  const lang = useSelector(store=> store.config.langauge);
  const showGptSearch = useSelector(store=>store.gpt.showGptSearch);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signOutUser = ()=>{
    signOut(auth).then(() => { }).catch((error) => {
      // An error happened.
    });
  }

  const toggleGptComponent = ()=>{
    dispatch(toggleGptSearch());
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


  const handleChangeLang = (e)=>{
    dispatch(changeLanguage(e.target.value))
  }
  
  return (
    <div className='flex md:justify-between md:flex-row flex-col bg-gradient-to-b from-black absolute w-full'>
      <div >
      <img className="w-32 md:w-44 md:ml-5 mx-auto" src={LOGO} alt='logo' />
      </div>
    {user && 
    <div className='flex h-12 justify-between'>
      {showGptSearch && <select className='px-2 m-2 bg-gray-700 text-white' onChange={handleChangeLang}>
        {SUPPORTED_LANG.map((lang)=> <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
      </select>}
      <button className='px-4 m-2 bg-purple-600 text-white rounded-lg' onClick={toggleGptComponent}>GPT Search</button>
      <img src={USER_LOGO} alt='logo icon' className='m-2 w-8 h-8 rounded-sm hidden md:block'/>
      <button className="m-2  py-0 px-2 text-white font-semibold bg-red-600 rounded-lg" onClick={signOutUser}>Sign Out</button>
    </div> }
    </div>
  )
}

export default Header;
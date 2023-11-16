import React from 'react'
import NetflixIcon from "../utils/images/netflix-removebg-preview.png"
import { Link } from 'react-router-dom'
import { addUser , removeUser } from '../utils/Slice/UserSlice'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Header = () => {

    
  const dispatch = useDispatch()

  const navigate = useNavigate()


  useEffect(() => {

    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid , email , displayName , photoURL} = user;
        dispatch(addUser({uid: uid , email: email, displayName: displayName , photoURL : photoURL}))
        navigate("/browse")
      } else {
        dispatch(removeUser()) 
        // navigate("/")
      }
    });
    return () => unsubscribe()
  } , [ ])


  return (
    <div className="ml-36 h-36 absolute top-0">
      <Link to={"/"}><img src={NetflixIcon} alt="icon" className='w-36 h-36'/></Link>
    </div>
  )
}


export default Header
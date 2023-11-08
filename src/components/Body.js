import React, { useEffect } from 'react'
import Login from "./Login"
import Browse from "./Browse"
import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from './Home'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux'
import { addUser , removeUser } from '../utils/UserSlice'

const Body = () => {
  const dispatch = useDispatch()

  const Approuter = createBrowserRouter([
    {
      path : "/",
      element : <Home />,
    },
    {
      path : "/browse",
      element : <Browse/>
    },
    {
      path : "/login",
      element : <Login />
    }
  ])
  


  useEffect(() => {

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid , email , displayName , photoURL} = user;
        dispatch(addUser({uid: uid , email: email, displayName: displayName , photoURL : photoURL}))
      } else {
        dispatch(removeUser())
      }
    });
    
  } , [ ])

  return (
    <div>
      <RouterProvider router={Approuter}/>
    </div>
  )
}

export default Body
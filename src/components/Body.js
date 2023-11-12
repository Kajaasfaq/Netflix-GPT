import React from 'react'
import Login from "./Login"
import Browse from "./Browse"
import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from './Home'

const Body = () => {

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
  


 
  return (
    <div>
      <RouterProvider router={Approuter}/>
    </div>
  )
}

export default Body
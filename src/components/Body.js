import React from 'react'
import Login from "./Login"
import Browse from "./Browse"
import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from './Home'
import MovieDetails from './MovieDetails'

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
    },
    {
      path : "/MovieDetails",
      element : <MovieDetails />
    },
  ])
  


 
  return (
    <div>
      <RouterProvider router={Approuter}/>
    </div>
  )
}

export default Body
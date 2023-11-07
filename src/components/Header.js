import React from 'react'
import NetflixIcon from "../utils/netflix-removebg-preview.png"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="ml-36 h-36 absolute top-0">
      <Link to={"/"}><img src={NetflixIcon} alt="icon" className='w-36 h-36'/></Link>
    </div>
  )
}

export default Header
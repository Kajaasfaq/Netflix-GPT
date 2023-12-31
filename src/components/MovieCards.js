import React from 'react'
import { ImageCDN } from '../utils/Api'

const MovieCards = ({posterPath}) => {
  if(!posterPath) return null
    return (
    <div className=' w-48 px-2 hover:transition ease-in-out delay-150 over:-translate-y-1 hover:scale-110 duration-300'>
        <img alt='poster' src={ImageCDN + posterPath} />
    </div>
  )
}

export default MovieCards
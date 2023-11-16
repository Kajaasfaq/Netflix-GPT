import React, { useRef } from 'react'
import { NetflixBG } from '../utils/Image'
import Footer from '../components/Footer'
import { lang } from './LangConstant'
import { useDispatch, useSelector } from 'react-redux'
// import openai from '../utils/openai'
import { Apioptions } from '../utils/Api'
// import { AddMovieDataResults } from '../utils/Slice/GptStateSlice'
import { AddSearchList, AddTVSearchList } from '../utils/Slice/MoviesSlice'
import MovieList from './MovieList'


const Gptsearch = () => {
  const LangType = useSelector(store => store.MultiLang.SupportLang)
  const dispatch = useDispatch()
 
  const movie = useSelector(store => store.movies)
  

  const SearchText = useRef("")
  const SearchMovieResult = useRef("")
  const SearchTVResult = useRef("")


  const searchMovie = async() => {
    const movie = SearchMovieResult?.current?.value;
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+ movie +'&include_adult=false&language=en-US&page=1', Apioptions)
    const response = await data.json()
    const searchResult = response?.results
    dispatch(AddSearchList(searchResult))
  }

  const searchTv = async() => {
    const movie = SearchTVResult?.current?.value;
    const data = await fetch('https://api.themoviedb.org/3/search/tv?query='+ movie +'&include_adult=false&language=en-US&page=1', Apioptions)
    const response = await data.json()
    console.log(response.results)
    const searchResult = response?.results
    dispatch(AddTVSearchList(searchResult))
  }


  // const searchMovieData = async(movie) => {
  //   const data = await fetch('https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1', Apioptions)
  //   const response = await data.json()
  //   return response.results;
  // }

  // const handleGptSearchClick =  async () => {

  //   const GptQurey = "Act like movie recommendation system and give results according to my query" + SearchText.current.value + 
  //   "only give me names 5 movie list and coma separate with according to example like this example = solo , don , hero ,unlucky idoit , thug life"
    
  //   const Gptsearch = await openai.chat.completions.create({
  //       messages: [{ role: 'user', content: GptQurey }],
  //       model: 'gpt-3.5-turbo',
  //     }).catch((err) => {console.log(err)}) ;
  //     if(!Gptsearch.content) return
      
  //     const GptsearchMovie = Gptsearch.choices?.[0]?.message?.content.split(",")

  //     const promiseArray = GptsearchMovie.map(movie => searchMovieData(movie))

  //     const MovieResult = await Promise.all(promiseArray)

  //     dispatch(AddMovieDataResults({MovieList : GptsearchMovie , MovieResult : MovieResult  }))
  // }

  const handleAlert = () => {
    alert("Sorry - Currently Not Working - API KEY token limit Finished")
  }

  return (
    <div className=''>
        <div className='w-[100%] h-[130%] bg-black opacity-75 absolute'></div>
        <img alt='bg-Gpt' className='w-screen' src={NetflixBG} />
        <div className='absolute top-40 left-1/4 flex flex-col gap-9'>
            <form onClick={(e) => e.preventDefault()} className='flex justify-center gap-3' >
              <h1 className='text-white mt-3'>GPT - Movie Suggestion Search </h1>
                <input type='text' placeholder={lang[LangType].gptPlaceholder} ref={SearchText} className='ml-10 px-3 font-body font-normal text-black w-[450px] h-12 rounded-lg'/>
                <button className='bg-red-600 text-white px-12 h-12 rounded-lg hover:bg-red-800' onClick={handleAlert}>{lang[LangType].search}</button>
            </form>
            <form onClick={(e) => e.preventDefault()} className='flex justify-center gap-3' >
              <h1 className='text-white mt-3 ml-4'>Search Movies </h1>
                <input type='text' placeholder={lang[LangType].searchMovie} ref={SearchMovieResult} className='ml-32 px-3 font-body font-normal text-black w-[450px] h-12 rounded-lg'/>
                <button className='bg-red-600 text-white px-12 h-12 rounded-lg hover:bg-red-800' onClick={searchMovie}>{lang[LangType].search}</button>
            </form>
            <form onClick={(e) => e.preventDefault()} className='flex justify-center gap-3' >
              <h1 className='text-white mt-3 ml-4'>Search Tv Show</h1>
                <input type='text' placeholder={lang[LangType].searchTv} ref={SearchTVResult} className='ml-32 px-3 font-body font-normal text-black w-[450px] h-12 rounded-lg'/>
                <button className='bg-red-600 text-white px-12 h-12 rounded-lg hover:bg-red-800' onClick={searchTv}>{lang[LangType].search}</button>
            </form>
        </div>
        <div className='bg-black h-[395px] w-[100%] flex flex-row z-20 absolute'>
            <Footer/>
        </div>
        <div className=''>
        <div className='absolute top-96 flex overflow-hidden hover:overflow-x-scroll scrollbar-hide w-[100%]'>
          <div className='flex'>
          {movie.SearchMovieList && <MovieList title="Search Results For Movie" movies={movie.SearchMovieList}/>}
          </div>
        </div>
        <div className='absolute top-[650px] flex overflow-hidden hover:overflow-x-scroll scrollbar-hide w-[100%]'>
          <div className='flex'>
          {movie.SearchTvList && <MovieList title="Search Results For Tv Shows" movies={movie.SearchTvList}/>}
          </div>
        </div>
        
        </div>
    </div>
  )
}

export default Gptsearch
import React, { useEffect } from 'react'
import Header from './Header';
import { API_OPTIONS, TMDB_BASE_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/moviesSlice';

const Browse = () => {
  const dispatch = useDispatch();


  const getNowPlayingMovies = async() =>{
    try {
      const response = await fetch(TMDB_BASE_URL, API_OPTIONS);
      const data = await response.json();
      console.log("Now Playing Movies:", data.results);
      // Dispatch the action to store now playing movies in Redux
      dispatch( addNowPlayingMovies(data.results) );
 
    }catch (error) {
      console.log("Error fetching now playing movies:", error);
    } 
  }

  useEffect(() => {
    getNowPlayingMovies();
  }, []);



  return (
    <div>
      <Header/>
    </div>
  )
}

export default Browse;
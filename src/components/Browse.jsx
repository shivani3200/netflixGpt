import React, { useEffect } from 'react'
import Header from './Header';
import { API_OPTIONS, TMDB_BASE_URL } from '../utils/constants';

const Browse = () => {

  

  const getNowPlayingMovies = async() =>{
    try {
      const response = await fetch(TMDB_BASE_URL, API_OPTIONS);
      const data = await response.json();

      console.log("Now Playing Movies:", data.results);

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
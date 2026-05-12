import React, { useEffect } from 'react'
import Header from './Header';
import { API_OPTIONS, TMDB_BASE_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/moviesSlice';
import useNowPlayingMovies from '../customHooks/useNowPlayingMovies';

const Browse = () => {

  //custom hook to fetch now playing movies and store in Redux
  useNowPlayingMovies();

  return (
    <div>
      <Header/>
    </div>
  )
}

export default Browse;
import { useDispatch } from "react-redux";
import { API_OPTIONS, TMDB_BASE_URL } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    try {
      const response = await fetch(TMDB_BASE_URL, API_OPTIONS);
      const data = await response.json();
      console.log("Now Playing Movies:", data.results);
      // Dispatch the action to store now playing movies in Redux
      dispatch(addNowPlayingMovies(data.results));
    } catch (error) {
      console.log("Error fetching now playing movies:", error);
    }
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;

import logo from "../assets/images/Netflix_Logo.png";

export const LOGO = logo;

export const USER_AVATAR =
  "https://avatars.githubusercontent.com/u/123661346?v=4";


  //api options for fetching data from tmdb api
export const TMDB_BASE_URL =  "https://api.themoviedb.org/3/movie/now_playing?page=1";
 ;
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_ACCESS_TOKEN}`,
  },
};

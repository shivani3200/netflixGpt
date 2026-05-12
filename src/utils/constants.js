import logo from "../assets/images/Netflix_Logo.png";

export const LOGO = logo;

export const USER_AVATAR =  "https://avatars.githubusercontent.com/u/123661346?v=4";

const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjQ1YTkxODkxYWM2NDQ2MzI2Y2EwMDRlZGRmZDQ1NSIsIm5iZiI6MTc3ODU2OTAyMi4xNzI5OTk5LCJzdWIiOiI2YTAyY2YzZWFlMmI2MjhkYzNlMTU5ZTciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.fTFpBcjJtkv_O0izh_3WihyL7FZATuS8OlyuaRUnpfU'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));
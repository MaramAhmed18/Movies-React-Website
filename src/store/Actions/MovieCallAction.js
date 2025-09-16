import axios from "axios";

const API_KEY = "29cf44b93ca83bf48d9356395476f7ad";

// Movies List (with search + language + pagination)
export const getMovieList = (language = "en", query = "", page = 1) => (dispatch) => {
  const url = query
    ? `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=${language}&query=${query}&page=${page}`
    : `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=${language}&page=${page}`;

  return axios
    .get(url)
    .then((res) =>
      dispatch({
        type: "GET_MOVIES",
        payload: res.data.results,
      })
    )
    .catch((err) => console.log(err));
};
// For selected movie
export const getMovieDetails = (id, language = "en") => (dispatch) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=${language}`
    )
    .then((res) =>
      dispatch({
        type: "GET_MOVIE_DETAILS",
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};


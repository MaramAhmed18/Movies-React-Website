import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Card from "../componants/Card";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetails } from "../store/Actions/MovieCallAction";
import { useContext } from "react";
import { LanguageContext } from "../Context/LangContext";

function MovieDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const movie = useSelector((state) => state.combineMovieCall.details);

  // ✅ نجيب اللغة من الـ context
  const { contextLang } = useContext(LanguageContext);
  const langCode = contextLang === "EN" ? "en" : "ar";

  useEffect(() => {
    dispatch(getMovieDetails(id, langCode));
  }, [dispatch, id, langCode]);

  if (!movie) {
    return (
      <p className="text-white mt-4 text-center">Loading movie details...</p>
    );
  }

  return (
    <div className="container text-white mt-4 d-flex justify-content-center">
      <Card
        title={movie.title}
        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        description={movie.overview}
        date={movie.release_date}
        rating={movie.vote_average}
        width="30rem"
      />
    </div>
  );
}
export default MovieDetails;

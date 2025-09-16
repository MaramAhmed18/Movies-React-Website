import React, { useEffect, useContext, useState } from "react";
import Card from "../componants/Card";
import { useDispatch, useSelector } from "react-redux";
import { getMovieList } from "../store/Actions/MovieCallAction";
import { LanguageContext } from "../Context/LangContext";

function Movies() {
  const list = useSelector((state) => state.combineMovieCall.list);
  const dispatch = useDispatch();

  // Language context
  const { contextLang } = useContext(LanguageContext);
  const langCode = contextLang === "EN" ? "en" : "ar";

  // Local states
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  // Fetch movies whenever language, query, or page changes
  useEffect(() => {
    dispatch(getMovieList(langCode, query, page));
  }, [dispatch, langCode, query, page]);

  // Handle search submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setPage(1); // reset to first page
    dispatch(getMovieList(langCode, query, 1));
  };

  // Pagination: limit to 4 items per page
  const cardsPerPage = 4;
  const totalPages = Math.ceil((list?.length || 0) / cardsPerPage);
  const startIndex = (page - 1) * cardsPerPage;
  const visibleMovies = list?.slice(startIndex, startIndex + cardsPerPage);

  return (
    <div className="container mt-4">
      {/* Search Bar */}
      <form className="d-flex mb-4" onSubmit={handleSubmit}>
        <input
          className="form-control me-2"
          type="search"
          placeholder={
            contextLang === "EN" ? "Search for movies..." : "ابحث عن فيلم..."
          }
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-success" type="submit">
          {contextLang === "EN" ? "Search" : "بحث"}
        </button>
      </form>

      {/* Movie Cards */}
      <div className="d-flex flex-wrap justify-content-center gap-4">
        {visibleMovies?.length > 0 ? (
          visibleMovies.map((movie) => (
            <Card
              key={movie.id}
              id={movie.id}
              title={movie.title}
              image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              path={`/movies/${movie.id}`}
            />
          ))
        ) : (
          <p className="text-white">
            {contextLang === "EN" ? "No movies found." : "لا توجد أفلام"}
          </p>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="d-flex justify-content-center align-items-center mt-4 gap-2 flex-wrap">
          {/* Previous Button */}
          <button
            className="btn btn-outline-success"
            disabled={page === 1}
            onClick={() => setPage((prev) => prev - 1)}
          >
            {contextLang === "EN" ? "Previous" : "السابق"}
          </button>

          {/* Page Numbers */}
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              className={`btn ${
                page === index + 1 ? "btn-success" : "btn-outline-success"
              }`}
              onClick={() => setPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}

          {/* Next Button */}
          <button
            className="btn btn-outline-success"
            disabled={page === totalPages}
            onClick={() => setPage((prev) => prev + 1)}
          >
            {contextLang === "EN" ? "Next" : "التالي"}
          </button>
        </div>
      )}
    </div>
  );
}

export default Movies;

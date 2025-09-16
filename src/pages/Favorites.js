import React, { useContext } from "react";
import { useSelector } from "react-redux";
import Card from "../componants/Card";
import MyTitle from "../componants/MyTitle";
import { LanguageContext } from "../Context/LangContext";

function Favorites() {
  const favorites = useSelector((state) => state.combineFavorite.favorites);

  // ✅ نجيب اللغة من الـ context
  const { contextLang } = useContext(LanguageContext);

  return (
    <div className="container mt-4">
      {/* العنوان حسب اللغة */}
      <MyTitle
        title={contextLang === "EN" ? "My Favorite Movies" : "أفلامي المفضلة"}
      />

      <div className="d-flex flex-wrap justify-content-center gap-4">
        {favorites.length > 0 ? (
          favorites.map((movie) => (
            <Card
              key={movie.id}
              id={movie.id}
              title={movie.title}
              image={movie.image}
            />
          ))
        ) : (
          <p className="text-muted">
            {contextLang === "EN"
              ? "No favorite movies yet."
              : "لا توجد أفلام مفضلة بعد."}
          </p>
        )}
      </div>
    </div>
  );
}

export default Favorites;



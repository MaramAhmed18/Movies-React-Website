import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FavoritesAction } from "../store/Actions/FavoritesAction";

function Card(props) {
  const myTheme = useSelector((state) => state.combineTheme.theme);
  const favorites = useSelector((state) => state.combineFavorite.favorites);
  const dispatch = useDispatch();

  const isFavorite = favorites.some((f) => f.id === props.id);

  const toggleFavorite = () => {
    dispatch(FavoritesAction(props));
  };

  return (
    <div
      className={`card mb-3 pb-3 ${
        myTheme === "Light" ? "bg-light text-dark" : "bg-dark text-white"
      }`}
      data-bs-theme={myTheme === "Light" ? "light" : "dark"}
      style={{ width: props.width || "18rem" }}
    >
      <img
        src={props.image}
        className="card-img-top"
        style={{ maxHeight: "400px" }}
        alt={props.title}
      />
      <div className="card-body px-3">
        <div className="d-flex justify-content-center gap-3 align-items-center">
          <h5 className="card-title my-4">{props.title}</h5>
          <span onClick={toggleFavorite} style={{ cursor: "pointer" }}>
            <i
              className={`fa-solid fa-heart ${
                isFavorite ? "text-danger" : "text-muted"
              }`}
            ></i>
          </span>
        </div>
        {props.date && (
          <p className="card-text">
            <span className="text-success">Release Date: </span> {props.date}
          </p>
        )}
        {props.rating && (
          <p className="card-text">
            <span className="text-success">Rating: </span> {props.rating}
          </p>
        )}
        {props.description && (
          <p className="card-text">{props.description}</p>
        )}
        {props.path && (
          <Link to={props.path} className="btn btn-outline-success">
            View
          </Link>
        )}
      </div>
    </div>
  );
}

export default Card;

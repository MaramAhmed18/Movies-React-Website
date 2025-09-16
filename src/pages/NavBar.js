
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ThemeAction } from "../store/Actions/ThemeAction";

import { useContext } from "react";
import { LanguageContext } from "../Context/LangContext";

function NavBar() {

  // to get data from store ==> useSelector 
  const myTheme = useSelector((state) => state.combineTheme.theme)

  const dispatch = useDispatch()

  // to change in state in store => useDispatch
  const changeCurrentTheme = () => {
    dispatch(ThemeAction(myTheme == "Light" ? "Dark" : "Light"))
  }

  // Context => change language
  const {contextLang, setContextLang} = useContext(LanguageContext)
  
   // toggle language
  const toggleLang = () => {
    setContextLang(contextLang === "EN" ? "AR" : "EN");
  };


  return (
    <>
      <nav className={`navbar navbar-expand-lg border-bottom border-body ${myTheme === "Light" ? "bg-light text-dark" : "bg-dark text-light"}`}
        data-bs-theme={myTheme === "Light" ? "light" : "dark"}>

        <div className="container">
          <Link className="navbar-brand me-5" to="/">Movies</Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item ms-lg-4">
                <Link className="nav-link active" aria-current="page" to="/">Movies</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/favorites">Favorites</Link>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">

                <button className="btn btn-success me-3" onClick={changeCurrentTheme}>
                  {myTheme === "Light" ? (
                    <i class="fa-solid fa-sun"></i>
                  ) : (
                    <i class="fa-solid fa-moon"></i>
                  )}
                </button>
              </li>
              <li className="nav-item">

                <button className="btn btn-success me-3" onClick={toggleLang}>
                  {contextLang === "EN" ? "AR" : "EN"}
                </button>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/register">Register</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      

    </>

  );
}
export default NavBar;

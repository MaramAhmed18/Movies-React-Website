
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './pages/NavBar.js';
import Movies from './pages/Movies.js';
import Favorites from './pages/Favorites.js';
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import MovieDetails from './pages/MovieDetails.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { useSelector } from 'react-redux';
import { LanguageContext } from './Context/LangContext.js';
import { useState } from 'react';

function App() {
  // read data from store
  const myTheme = useSelector((state) => state.combineTheme.theme)
//context
const [contextLang, setContextLang] = useState("EN")
  return (
    <div className={myTheme === "Light" ? "bg-light text-dark" : "bg-dark text-white"}
      data-bs-theme={myTheme === "Light" ? "light" : "dark"} style={{ minHeight: "100vh", textAlign: "center" }}>
      <LanguageContext.Provider value={{contextLang, setContextLang}}>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Movies} />
            <Route path="/favorites" component={Favorites} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/movies/:id" component={MovieDetails} />

          </Switch>
        </BrowserRouter>
      </LanguageContext.Provider>
    </div>
  );
}

export default App;

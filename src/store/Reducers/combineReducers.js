import {combineReducers}  from 'redux';
import themeReducer from './ThemeReducer';
import favoritesReducer from './FavoritesReducer';
import MovieCallReducer from './MovieCallReducer';
// import langReducer from './LangRducer';
// import loaderReducer from './LoaderReducer';

export default combineReducers({
    // Add your reducers here.
    combineTheme: themeReducer,
    combineFavorite: favoritesReducer,
    combineMovieCall: MovieCallReducer

    // combineLang: langReducer,
    // combineLoader: loaderReducer
})
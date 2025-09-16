
const initialState = {
  favorites: []
}

export default function FavoritesReducer(state = initialState, action) {
  switch (action.type) {
    case "TOGGLE_FAVORITE":
      const exists = state.favorites.find(f => f.id === action.payload.id)
      return {
        ...state,
        favorites: exists
          ? state.favorites.filter(f => f.id !== action.payload.id) // remove
          : [...state.favorites, action.payload] // add
      }
    default:
      return state
  }
}

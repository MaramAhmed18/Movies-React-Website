

const INITIAL_STATE = {
  list: [],
  details: null,
};

export default function MovieCallReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "GET_MOVIES":
      return {
        ...state,
        list: action.payload,
      };
    case "GET_MOVIE_DETAILS":
      return {
        ...state,
        details: action.payload,
      };
    default:
      return state;
  }
}

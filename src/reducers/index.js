import {
  ADD_MOVIES,
  ADD_TO_FAVOURITES,
  REMOVE_FROM_FAVOURITES,
  SET_SHOW_FAVOURITES,
} from "../actions";

// Redux reducer: State object with 3 properties
const initialMoviesState = {
    list: [],           // All movies fetched from data.js
    favourites: [],     // Movies user added to favourites
    showFavourites: false // Toggle between viewing all movies or just favourites
}

export default function movies(state = initialMoviesState, action) {
  // Reducer: Takes current state and action, returns new state
  switch (action.type) {
    // ADD_MOVIES: Set the initial list of all movies
    case ADD_MOVIES:
      return {
        ...state,  // Keep all other properties unchanged
        list: action.movies,  // Update list with fetched movies
      };
    
    // ADD_TO_FAVOURITES: Add movie to favourites list
    case ADD_TO_FAVOURITES:
      return {
        ...state,
        // Add new movie to beginning of favourites array
        favourites: [action.movie, ...state.favourites],
      };
    
    // REMOVE_FROM_FAVOURITES: Remove movie from favourites list
    case REMOVE_FROM_FAVOURITES:
      const filteredArray = state.favourites.filter(
        (movie) => movie.Title !== action.movie.Title,
      );
      return {
        ...state,
        // Keep only movies that don't match the removed movie
        favourites: filteredArray,
      };
    
    // SET_SHOW_FAVOURITES: Toggle between viewing all movies or favourites
    case SET_SHOW_FAVOURITES:
      return {
        ...state,
        showFavourites: action.val,  // true = show favourites, false = show all
      };
    
    // Default: Return state unchanged if action type doesn't match
    default:
      return state;
  }
}

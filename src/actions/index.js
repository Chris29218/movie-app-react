// ========== ACTION TYPES ==========
// These are string constants used to identify what action happened
// They get sent to the reducer which updates the Redux store

// Action: Load all movies into store
export const ADD_MOVIES = 'ADD_MOVIES';

// Action: Add a movie to favourites list
export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES';

// Action: Remove a movie from favourites list
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES';

// Action: Toggle between viewing all movies or favourites
export const SET_SHOW_FAVOURITES = 'SET_SHOW_FAVOURITES';

// ========== ACTION CREATORS ==========
// These functions create action objects that get dispatched to Redux

// Action creator: Load initial movies data
export function addMovies(movies){
    return {
        type: ADD_MOVIES,
        movies: movies
    }
}

// Action creator: Add movie to favourites
export function addFavourite(movie){
    return {
        type: ADD_TO_FAVOURITES,
        movie: movie
    }
}

// Action creator: Remove movie from favourites
export function removeFromFavourites(movie){
    return {
        type: REMOVE_FROM_FAVOURITES,
        movie: movie
    }
}

// Action creator: Switch between All Movies tab and Favourites tab
export function setShowFavourites(val){
    return {
        type: SET_SHOW_FAVOURITES,
        val: val
    }
}
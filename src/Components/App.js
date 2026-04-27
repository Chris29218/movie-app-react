import React, { useState, useEffect } from "react";
import { data } from "./data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies, setShowFavourites } from "../actions";

const App = (props) => {
  const { store } = props;
  const [searchText, setSearchText] = useState("");
  // Used to force a re-render when the Redux store updates
  const [, forceUpdate] = useState({});

  // Lifecycle: Runs once when component mounts
  useEffect(() => {
    // Subscribe to Redux store changes - forces re-render with new state
    const unsubscribe = store.subscribe(() => {
      forceUpdate({});
    });

    // Dispatch action to load movies into Redux store
    store.dispatch(addMovies(data));

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [store]);

  // Check if a movie exists in favourites list
  const isMovieFavourite = (movie) => {
    const { favourites } = store.getState();
    // Compare by movie title (not object reference) for accurate results
    return favourites.some((fav) => fav.Title === movie.Title);
  };

  const onChangeTab = (val) => {
    store.dispatch(setShowFavourites(val));
  };

  // Update searchText when user types in Navbar
  const handleSearch = (text) => {
    setSearchText(text);
  };

  // Get movies from Redux store
  const { list, favourites, showFavourites } = store.getState();

  // Display Favourites if tab selected, otherwise show All Movies
  const currentList = showFavourites ? favourites : list;

  // Search: Filter movies by title matching search text (case-insensitive)
  const displayMovies = currentList.filter((movie) =>
    movie.Title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="App">
      <Navbar onSearch={handleSearch} store={store} />
      <div className="main">
        <div className="tabs">
          <div
            className={`tab ${showFavourites ? "" : "active-tabs"}`}
            onClick={() => onChangeTab(false)}
          >
            Movies
          </div>
          <div
            className={`tab ${showFavourites ? "active-tabs" : ""}`}
            onClick={() => onChangeTab(true)}
          >
            Favourites
          </div>
        </div>

        <div className="list">
          {displayMovies.map((movie) => (
            <MovieCard
              movie={movie}
              key={movie.Title}
              //passing to moviecard access of the dispatch
              dispatch={store.dispatch}
              //giving the bool val if it is fav or not
              isFavourite={isMovieFavourite(movie)}
            />
          ))}
        </div>
        {displayMovies.length === 0 ? (
          <div className="no-movies">no movies to display!</div>
        ) : null}
      </div>
    </div>
  );
};

export default App;

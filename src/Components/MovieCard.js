import React from "react";
import { addFavourite, removeFromFavourites } from "../actions";

class Moviecard extends React.Component {
  // When user clicks "Favourite" button
  handleFavouriteClick = () => {
    const { movie } = this.props;
    // Dispatch action to add this movie to favourites
    this.props.dispatch(addFavourite(movie));
  };

  // When user clicks "Unfavourite" button
  handleUnFavouriteClick = () => {
    const { movie } = this.props;
    // Dispatch action to remove this movie from favourites
    this.props.dispatch(removeFromFavourites(movie));
  };

  render() {
    const { movie } = this.props;
    return (
      <div className="movie-card">
        {/* Movie Poster Image */}
        <div className="left">
          <img alt="movie-poster" src={movie.Poster}></img>
        </div>
        
        {/* Movie Info: Title, Plot, Rating, and Favourite Button */}
        <div className="right">
          <div className="title">{movie.Title}</div>
          <div className="plot">{movie.Plot}</div>
          <div className="footer">
            <div className="rating">{movie.imdbRating}</div>
            {/* Show Unfavourite button if already in favourites, else show Favourite button */}
            {this.props.isFavourite ? (
              <button
                className="unfavourite-btn"
                onClick={this.handleUnFavouriteClick}
              >
                Unfavourite
              </button>
            ) : (
              <button
                className="favourite-btn"
                onClick={this.handleFavouriteClick}
              >
                {" "}
                Favourite{" "}
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Moviecard;

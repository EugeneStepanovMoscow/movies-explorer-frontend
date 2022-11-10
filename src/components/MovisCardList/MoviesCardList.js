import React from 'react';
import Movie from "../Movie/Movie"

function MoviesCardList ({
  moviesList,
  savedMoviesList,
  placeOfCall,
  saveMovie,
  deleteMovie
})
{


  return (
    <ul className="movies-card-list">
      {moviesList.map(movie =>
        <Movie
          key={placeOfCall === 'movies' ? movie.id : movie.movieId}
          movieInfo={movie}
          placeOfCall={placeOfCall}
          saveMovie={saveMovie}
          deleteMovie={deleteMovie}
          savedMoviesList={savedMoviesList}
        />
      )}
    </ul>
  )
}

export default MoviesCardList

import React, { useEffect } from 'react';
import Movie from "../Movie/Movie"

function MoviesCardList ({
  moviesList,
  savedMoviesList,
  placeOfCall,
  saveMovie,
  deleteMovie
})

{
useEffect(() => {
  // savedMoviesId.forEach((id) => {
  //   for (let i = 0; i < moviesList.length; i++) {
  //     if (moviesList[i].id === id) {
  //       moviesList[i] = {...moviesList[i], liked: true}
  //       moviesList = moviesList.splice(i, 1, moviesList[i]);
  //     } else {
  //       moviesList[i] = {...moviesList[i], liked: false}
  //       moviesList = moviesList.splice(i, 1, moviesList[i]);
  //     }
  //   }
  // })
    // console.log(moviesList)
},[])

  // console.log(moviesList)
  // console.log(savedMoviesId)

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

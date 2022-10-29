import React, { useEffect } from 'react';
import Movie from "../Movie/Movie"

function MoviesCardList ({
  moviesList
})

{
useEffect(() => {
  // console.log(moviesList)
})

  return (
    <ul className="movies-card-list">
      {moviesList.map(movie =>
              // console.log(movie)
        <Movie
          key={movie.id}
          movieInfo={movie}
        />
      )}
    </ul>
  )
}

export default MoviesCardList

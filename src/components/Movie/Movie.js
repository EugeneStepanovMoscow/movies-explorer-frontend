import React, { useState, useEffect } from "react";
import durationTransform from "../../utils/DurationTransform";

function Movie({
  movieInfo,
  placeOfCall,
  saveMovie,
  deleteMovie,
  savedMoviesId
})
 {

  const [isMovieLiked, setIsMovieLiked] = useState(false)

  function handleClick() {
    if (!isMovieLiked) {
      console.log('сохранить')
      saveMovie(movieInfo)
    } else {
      console.log('удалить')
      deleteMovie(movieInfo)
    }
    setIsMovieLiked(!isMovieLiked)
  }

  useEffect(() => {
    setIsMovieLiked(savedMoviesId.some((savedMovie) => savedMovie.movieId === movieInfo.id))
  },[])

  // const array = [1, 2, 3, 4, 5];

  // // checks whether an element is even
  // const even = (element) => element % 2 === 0;

  // console.log(array.some(even));
  // // expected output: true



  return (
    <li className='movie'>
      <div className='movie__head'>
        <div className='movie__info'>
          <h2 className='movie__name'>{movieInfo.nameRU}</h2>
          <p className='movie__length'>{durationTransform(movieInfo.duration)}</p>
        </div>
        <button
          className={`movie__btn-save ${isMovieLiked ? 'movie__btn-save_active' : ''}`}
          type='button'
          onClick={handleClick}>
        </button>
      </div>
      <a className='movie__image-box' href={movieInfo.trailerLink} target='blank'>
        <img
          className='movie__image'
          src={`https://api.nomoreparties.co${movieInfo.image.url}`}
          alt={movieInfo.nameRU}/>
      </a>
    </li>
  )
}

export default Movie

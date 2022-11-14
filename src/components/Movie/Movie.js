import React, { useState, useEffect } from "react";
import durationTransform from "../../utils/DurationTransform";
import constants from "../../utils/constants";

function Movie({
  movieInfo,
  placeOfCall,
  saveMovie,
  deleteMovie,
  savedMoviesList
})
 {

  const [isMovieLiked, setIsMovieLiked] = useState(false);
  const [buttonDeletStatus, setButtonDeletStatus] = useState(false);
  const [isMovieStatusChecked, setIsMovieStatusChecked] = useState(false);

  function handleClick() {
    if (buttonDeletStatus) {
      deleteMovie(movieInfo)
    } else {
      if (!isMovieLiked) {
        saveMovie(movieInfo)
      } else {
        deleteMovie(savedMoviesList.find((el) => el.movieId === movieInfo.id))
      }
      setIsMovieLiked(!isMovieLiked)
    }
  }

  function buttonClass(place) {
    if (place ==='movies') {
      if (isMovieLiked) {
        return 'movie__btn-save_active'
      } else {
        return ''
      }
    } else {
      return 'movie__btn-save_delete'
    }
  }

  useEffect(() => {
    if (placeOfCall === 'movies') {
      setButtonDeletStatus(false)
      setIsMovieLiked(savedMoviesList.some(savedMovie => savedMovie.movieId === movieInfo.id))
    } else {
      setButtonDeletStatus(true)
    }
    setIsMovieStatusChecked(true)
  },[])

  return (
    <>
      {isMovieStatusChecked &&
        <li className='movie'>
          <div className='movie__head'>
            <div className='movie__info'>
              <h2 className='movie__name'>{movieInfo.nameRU}</h2>
              <p className='movie__length'>{durationTransform(movieInfo.duration)}</p>
            </div>
            <button
              className={`movie__btn-save ${buttonClass(placeOfCall)}`}
              type='button'
              onClick={handleClick}>
            </button>
          </div>
          <a className='movie__image-box' href={movieInfo.trailerLink} target='blank'>
            <img
              className='movie__image'
              src={placeOfCall === 'movies'? (constants.MovieImageUrl + movieInfo.image.url) : movieInfo.image}
              alt={movieInfo.nameRU}/>
          </a>
        </li>
      }
    </>
  )
}

export default Movie

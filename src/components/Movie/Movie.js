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
  const [buttonDeletStatus, setButtonDeletStatus] = useState(false)

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

  useEffect(() => {
    if (placeOfCall === 'movies') {
      setButtonDeletStatus(false)
      setIsMovieLiked(savedMoviesList.some((savedMovie) => savedMovie.movieId === movieInfo.id))
    } else {
      setButtonDeletStatus(true)
    }
  },[])

  // const array = [1, 2, 3, 4, 5];

  // // checks whether an element is even
  // const even = (element) => element % 2 === 0;

  // console.log(array.some(even));
  // // expected output: true
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


  return (
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
          src={placeOfCall === 'movies'? (constants.movieImageUrl + movieInfo.image.url) : movieInfo.image}
          alt={movieInfo.nameRU}/>
      </a>
    </li>
  )
}

export default Movie

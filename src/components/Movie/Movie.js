import React from "react";
import durationTransform from "../../utils/DurationTransform";

function Movie({
  movieInfo
})
 {
  return (
    <li className='movie'>
      <div className='movie__head'>
        <div className='movie__info'>
          <h2 className='movie__name'>{movieInfo.nameRU}</h2>
          <p className='movie__length'>{durationTransform(movieInfo.duration)}</p>
        </div>
        <button className='movie__btn-save' type="button"></button>
      </div>
      <img className='movie__image' src={`https://api.nomoreparties.co/${movieInfo.image.url}`} alt="Movie"/>
    </li>
  )
}

export default Movie

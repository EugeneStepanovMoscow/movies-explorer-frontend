import React from "react";
import FilPic from '../../images/movie_pic.jpg'

function Movie()
 {
  return (
    <li className="movie">
      <div className='movie__head'>
        <div className='movie__info'>
          <h2 className="movie__name">33 слова о дизайне</h2>
          <p className="movie__length">3ч 44мин</p>
        </div>
        <button className="movie__btn-save" type="button"></button>
      </div>
      <img className="movie__image" src={FilPic} alt="Movie"/>
    </li>
  )
}

export default Movie

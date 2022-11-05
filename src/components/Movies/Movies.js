import React, { useEffect, useState } from 'react';
import HeaderLogin from '../HeaderLogin/HeaderLogin';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MovisCardList/MoviesCardList';
import WindowWidthCheck from '../../utils/windowWidthCheck'

function Movies ({
  onSubmit,
  moviesList,
  savedMoviesList,
  saveMovie,
  deleteMovie,
  isLoading
})
{
  const [moviesListForDisplay, setMoviesListForDisplay] = useState([]);
  const [numberOfMovie, setNumberOfMovie] = useState();
  const [moreButtonStatus, setMoreButtonStatus] = useState(false)
  // настройки отображения и добавления карточек фильмов
  const [settings, setSettings] = useState({})

  function setWidth(values) {
    setSettings(values)
  }

  function filmsAdd() {
    setNumberOfMovie(numberOfMovie + settings.add)
  }

  function handleSubmit(req) {
    onSubmit(req)
    setNumberOfMovie(settings.start)
  }

  useEffect(() => {
    // переделать
    setMoviesListForDisplay(moviesList.slice(0, numberOfMovie))
  }, [moviesList, numberOfMovie])


  useEffect(() => {
    if (moviesList.length > moviesListForDisplay.length) {
      setMoreButtonStatus(true)
    } else {
      setMoreButtonStatus(false)
    }
    // console.log(WindowWidthCheck())
  }, [moviesListForDisplay])

  return (
    <>
      <WindowWidthCheck
        setWidth={setWidth}
      />
      <HeaderLogin/>
      <main className='movies'>
        <SearchForm
          onSubmit={handleSubmit}
          placeOfCall={'movies'}
          isLoading={isLoading}
        />
        <section className='movies__section'>
          {isLoading ? <Preloader/> : ''}
          <MoviesCardList
            moviesList={moviesListForDisplay}
            savedMoviesList={savedMoviesList}
            placeOfCall={'movies'}
            saveMovie={saveMovie}
            deleteMovie={deleteMovie}
          />
        </section>
        <section className='movies__more'>
          {/* выделить в отдельный компонент */}
          <button
            className={`movies__more-button ${moreButtonStatus ? '' : 'movies__more-button_hide'}`}
            onClick={filmsAdd}
          >Ещё</button>
        </section>
      </main>
      <Footer/>
    </>
  )
}

export default Movies

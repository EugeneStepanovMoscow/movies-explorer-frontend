import React, { useEffect, useState } from 'react';
import HeaderLogin from '../HeaderLogin/HeaderLogin';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MovisCardList/MoviesCardList';


function Movies ({
  onSubmit,
  moviesList,
  savedMoviesId,
  saveMovie,
  deleteMovie

})
{
  const [moviesListForDisplay, setMoviesListForDisplay] = useState([]);
  const [numberOfMovie, setnumberOfMovie] = useState(3);
  const [moreButtonStatus, setMoreButtonStatus] = useState(false)

  function filmsAdd() {
    setnumberOfMovie(numberOfMovie + 3)
    setMoviesListForDisplay(moviesList.slice(0, numberOfMovie))
    console.log(numberOfMovie.length)
  }

  function handleSubmit(req) {
    onSubmit(req)
    setnumberOfMovie(3)
  }

  useEffect(() => {
    // переделать
    setMoviesListForDisplay(moviesList.slice(0, numberOfMovie))
    // setMoreButtonStatus(true)
  }, [moviesList])


  useEffect(() => {
    if (moviesList.length > moviesListForDisplay.length) {
      setMoreButtonStatus(true)
    } else {
      setMoreButtonStatus(false)
    }
  }, [moviesListForDisplay])

  return (
    <>
      <HeaderLogin/>
      <main className='movies'>
        <SearchForm
          onSubmit={handleSubmit}
        />
        <section className='movies__section'>
          <Preloader/>
          <MoviesCardList
            moviesList={moviesListForDisplay}
            savedMoviesId={savedMoviesId}
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

import React from 'react';
import HeaderLogin from '../HeaderLogin/HeaderLogin';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MovisCardList/MoviesCardList';

function SavedMovies ({
  moviesList
})
{
return (
  <>
      <HeaderLogin/>
      <main className='movies'>
        <SearchForm/>
        <section className='movies__section'>
          <MoviesCardList
            moviesList={moviesList}
            // savedMoviesId={savedMoviesId}
            placeOfCall={'savedMovies'}
            // saveMovie={saveMovie}
            // deleteMovie={deleteMovie}
          />
        </section>
        {/* <section className='movies__more'>
          <button className='movies__more-button'>Ещё</button>
        </section> */}
      </main>
      <Footer/>
  </>
)
}

export default SavedMovies

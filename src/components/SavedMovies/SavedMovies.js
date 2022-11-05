import React from 'react';
import HeaderLogin from '../HeaderLogin/HeaderLogin';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MovisCardList/MoviesCardList';

function SavedMovies ({
  onSubmit,
  moviesList,
  deleteMovie,
  isLoading
})
{
return (
  <>
      <HeaderLogin/>
      <main className='movies'>
        <SearchForm
          onSubmit={onSubmit}
          placeOfCall={'savedMovies'}
          isLoading={isLoading}
        />
        <section className='movies__section'>
          <MoviesCardList
            moviesList={moviesList}
            placeOfCall={'savedMovies'}
            deleteMovie={deleteMovie}
          />
        </section>
      </main>
      <Footer/>
  </>
)
}

export default SavedMovies

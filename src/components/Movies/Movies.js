import React from 'react';
import HeaderLogin from '../HeaderLogin/HeaderLogin';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MovisCardList/MoviesCardList';

function Movies ({
  onSubmit,
  moviesList
})
{
  return (
    <>
      <HeaderLogin/>
      <main className='movies'>
        <SearchForm
          onSubmit={onSubmit}
        />
        <section className='movies__section'>
          <Preloader/>
          <MoviesCardList
            moviesList={moviesList}
          />
        </section>
        <section className='movies__more'>
          <button className='movies__more-button'>Ещё</button>
        </section>
      </main>
      <Footer/>
    </>
  )
}

export default Movies

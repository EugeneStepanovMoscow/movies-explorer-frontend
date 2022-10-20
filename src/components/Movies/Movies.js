import HeaderLogin from '../HeaderLogin/HeaderLogin'
import Footer from '../Footer/Footer'
import SearchForm from '../SearchForm/SearchForm'
import Preloader from '../Preloader/Preloader'
import MoviesCardList from '../MovisCardList/MoviesCardList'

function Movies ()
{
  return (
    <>
      <HeaderLogin/>
      <main className='movies'>
        <SearchForm/>
        <section className='movies__section'>
           <Preloader/>
          <MoviesCardList/>
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

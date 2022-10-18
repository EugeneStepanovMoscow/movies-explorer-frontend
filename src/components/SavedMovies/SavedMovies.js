import HeaderLogin from '../HeaderLogin/HeaderLogin'
import Footer from '../Footer/Footer'
import SearchForm from '../SearchForm/SearchForm'
// import MoviesCardList from '../MoviesCardList/MoviesCardList'

function SavedMovies ()
{
return (
  <>
    <HeaderLogin/>
    <main>
      <SearchForm/>
      {/* <MoviesCardList/> */}
    </main>
    <Footer/>
  </>
)
}

export default SavedMovies

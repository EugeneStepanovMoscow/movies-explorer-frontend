import logo from '../../images/header-logo.svg';

function Header() {
  return (
    <header className="headerLogin">
      <div className="headerLogin__box">
        <img className="headerLogin__logo" src={logo} alt='logo'/>
        <nav className="headerLogin__nav">
          <a className="headerLogin__nav-movies" href="/movies">Фильмы</a>
          <a className="headerLogin__nav-saved-movies" href="/saved-movies">Сохраненные фильмы</a>
        </nav>
      </div>
      <button className="headerLogin__accountButton">
        <a className="headerLogin__nav-saved-movies" href="/profile">Аккаунт</a>
      </button>
    </header>
  )
}

export default Header;

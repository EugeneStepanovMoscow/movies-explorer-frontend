import logo from '../../images/header-logo.svg';

function Header() {
  return (
    <header className="header">

        <img className="header__logo" src={logo} alt='logo'/>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-register">
              <a className="header__nav-text" href="register">Регистрация</a>
            </li>
            <li className="header__nav-enter">
              <a className="header__nav-text header__nav-text_white" href="login">Войти</a>
            </li>
          </ul>
        </nav>

    </header>
  )
}

export default Header;

import React, { useState } from 'react';
import logo from '../../images/header-logo.svg';

function Header() {
  const [navBurger, setNavBurger] = useState(false);

  return (
    <header className="headerLogin">
      <div className="headerLogin__box">
        <img className="headerLogin__logo" src={logo} alt='logo'/>
        <nav className={`headerLogin__nav ${navBurger ? 'headerLogin__nav_burger' : ''}`}>
          <ul className="headerLogin__nav-list">
            <li className={navBurger ? 'headerLogin__nav-item_burger' : 'headerLogin__nav-item headerLogin__nav-item_movie'}>
              <a className={navBurger ? 'headerLogin__nav-text' : 'headerLogin__nav-text__movies'} href="/movies">Фильмы</a>
            </li>
            <li className={navBurger ? 'headerLogin__nav-item_burger' : 'headerLogin__nav-item'}>
              <a className={navBurger ? 'headerLogin__nav-text' : 'headerLogin__nav-text__saved-movies'} href="/saved-movies">Сохраненные фильмы</a>
            </li>
            <li className={navBurger ? 'headerLogin__nav-item_burger' : 'headerLogin__nav-item_btn'}>
              <a className={navBurger ? 'headerLogin__nav-text' : 'headerLogin__nav-text_btn'} href="/profile">Аккаунт</a>
            </li>
          </ul>
        </nav>
      </div>
      <div
        className={`headerLogin__nav-burger-btn ${navBurger ? 'headerLogin__nav-burger-btn_active' : ''}`}
        onClick={() => setNavBurger(!navBurger)}
      >
        <span className={`headerLogin__nav-burger-line ${navBurger ? 'headerLogin__nav-burger-line_burger' : ''}`}></span>
      </div>

    </header>
  )
}

export default Header;

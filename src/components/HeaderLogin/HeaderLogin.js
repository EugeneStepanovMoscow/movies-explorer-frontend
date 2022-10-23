import React, { useState } from 'react';
import HeaderLink from '../HeaderLink/HeaderLink';

function Header() {
  const [navBurger, setNavBurger] = useState(false);

  return (
    <header className="headerLogin">
      <div className="headerLogin__box">
        <HeaderLink/>
        <div className={navBurger ? 'headerLogin__cover_active' : 'headerLogin__cover'}></div>
        <nav className={`headerLogin__nav ${navBurger ? 'headerLogin__nav_burger' : ''}`}>
          <ul className="headerLogin__nav-list">
            <li className={navBurger ? 'headerLogin__nav-item_burger' : 'headerLogin__nav-item headerLogin__nav-item_hide'}>
              <a className={navBurger ? 'headerLogin__nav-text' : ''} href="/main">Главная</a>
            </li>
            <li className={navBurger ? 'headerLogin__nav-item_burger' : 'headerLogin__nav-item headerLogin__nav-item_movie'}>
              <a className={navBurger ? 'headerLogin__nav-text' : 'headerLogin__nav-text__movies'} href="/movies">Фильмы</a>
            </li>
            <li className={navBurger ? 'headerLogin__nav-item_burger' : 'headerLogin__nav-item'}>
              <a className={navBurger ? 'headerLogin__nav-text' : 'headerLogin__nav-text__saved-movies'} href="/saved-movies">Сохраненные фильмы</a>
            </li>
            <li className={navBurger ? 'headerLogin__nav-item_burger' : 'headerLogin__nav-item_btn'}>
              <a className={navBurger ? 'headerLogin__nav-text headerLogin__nav-text_burgerBtn' : 'headerLogin__nav-text_btn'} href="/profile">Аккаунт</a>
            </li>
          </ul>
        </nav>
        <div
          className={`headerLogin__nav-burger-btn ${navBurger ? 'headerLogin__nav-burger-btn_active' : ''}`}
          onClick={() => setNavBurger(!navBurger)}
        >
          <span className={`headerLogin__nav-burger-line ${navBurger ? 'headerLogin__nav-burger-line_burger' : ''}`}></span>
        </div>
      </div>
    </header>
  )
}

export default Header;

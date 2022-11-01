import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
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
              <NavLink
                className={navBurger ? 'headerLogin__nav-text' : ''}
                to="/">
                Главная
              </NavLink>
            </li>
            <li className={navBurger ? 'headerLogin__nav-item_burger' : 'headerLogin__nav-item headerLogin__nav-item_movie'}>
              <NavLink
                className={navBurger ? 'headerLogin__nav-text' : 'headerLogin__nav-text__movies'}
                to="/movies">
                Фильмы
              </NavLink>
            </li>
            <li className={navBurger ? 'headerLogin__nav-item_burger' : 'headerLogin__nav-item'}>
              <NavLink
                className={navBurger ? 'headerLogin__nav-text' : 'headerLogin__nav-text__saved-movies'}
                to="/saved-movies">
                Сохраненные фильмы
              </NavLink>
            </li>
            <li className={navBurger ? 'headerLogin__nav-item_burger' : 'headerLogin__nav-item_btn'}>
              {/* <a className={navBurger ? 'headerLogin__nav-text headerLogin__nav-text_burgerBtn' : 'headerLogin__nav-text_btn'} href="/profile">Аккаунт</a> */}
              <Link
                className={navBurger ? 'headerLogin__nav-text headerLogin__nav-text_burgerBtn' : 'headerLogin__nav-text_btn'}
                to="/profile"
                >Аккаунт
              </Link>
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

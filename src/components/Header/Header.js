import React from 'react';
import HeaderLink from '../HeaderLink/HeaderLink';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <HeaderLink/>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-register">
            <NavLink className="header__nav-text" to="register">Регистрация</NavLink>
          </li>
          <li className="header__nav-enter">
            <NavLink className="header__nav-text header__nav-text_white" to="login">Войти</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;

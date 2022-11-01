import React from 'react';
import logo from '../../images/header-logo.svg';
import { NavLink } from 'react-router-dom';

function HeaderLink () {
  return (
    <NavLink className="headerLink" to="/">
      <img className="headerLink__logo" src={logo} alt='logo'/>
    </NavLink>
  )
}

export default HeaderLink


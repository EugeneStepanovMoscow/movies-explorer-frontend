import React from 'react';
import logo from '../../images/header-logo.svg';

function HeaderLink () {
  return (
    <a className="headerLink" href="/main">
      <img className="headerLink__logo" src={logo} alt='logo'/>
    </a>
  )
}

export default HeaderLink

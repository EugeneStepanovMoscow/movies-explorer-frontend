import React from 'react';
import Header from '../Header/Header';
import HeaderLogin from '../HeaderLogin/HeaderLogin';
import Footer from '../Footer/Footer';
import AboutMe from '../AboutMe/AboutMe';
import AboutProject from '../AboutProject/AboutProject';
import Tech from '../Tech/Tech';
import Intro from '../Intro/Intro';

function Main ({loggedIn})
{
  return (
    <>
      {loggedIn ? <HeaderLogin/> : <Header/>}
      <main>
        <Intro/>
        <AboutProject/>
        <Tech/>
        <AboutMe/>
      </main>
      <Footer/>
    </>
  )
}
export default Main

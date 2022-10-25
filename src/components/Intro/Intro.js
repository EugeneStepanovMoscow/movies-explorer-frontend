import React from 'react';

function Intro() {
  return (
    <section className="intro">
      <div className="intro__bgr">
        <h1 className="intro__title">Учебный проект студента факультета Веб-разработки.</h1>
        <ul className="intro__nav">
          <li className="intro__link">
            <a className="intro__link-text" href="#О проекте">О проекте</a>
          </li>
          <li className="intro__link">
            <a className="intro__link-text" href="#Технологии">Технологии</a>
          </li>
          <li className="intro__link">
            <a className="intro__link-text" href="#Студент">Студент</a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Intro;

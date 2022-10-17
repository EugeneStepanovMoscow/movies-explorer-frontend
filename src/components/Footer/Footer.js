function Footer() {
  const date = (`© ${new Date().getFullYear()}`)
  return (
    <footer className="footer">
      <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__bottom">
        <p className="footer__year">{date}</p>
        <ul className="footer__links">
          <li className="footer__link">
            <a className="footer__link-text" href="https://practicum.yandex.ru/" target="blank">Яндекс.Практикум</a>
          </li>
          <li className="footer__link">
            <a className="footer__link-text" href="https://github.com/EugeneStepanovMoscow" target="blank">Github</a>
            </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;


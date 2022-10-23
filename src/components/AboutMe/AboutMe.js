import SectionTitle from "../SectionTitle/SectionTitle";
import foto from "../../images/200.jpg"


function AboutMe() {
  return (
    <section className="about-me">
      <SectionTitle
        title={'Студент'}
      />
      <div className="about-me__info">
        <div className="about-me__text-container">
          <h3 className="about-me__name">Евгений</h3>
          <p className="about-me__profession">Фронтенд-зазработчик, 39 лет</p>
          <p className="about-me__description">Я родился и живу в Москве, закончил факультет материаловедения в МГТУ МАТИ им. К. Э. Циолковского. У меня есть жена и две дочери. Я увлекаюсь путешествиями и ездой на мотоцикле. Недавно начал кодить. С 2020 года работаю в компании «Яндекс.Такси». После того, как прошёл курс по веб-разработке, планирую заниматься фриланс-заказами.</p>
          <ul className="about-me__links">
            <li className="about-me__link">
              <a className="about-me__link-text" href="https://wa.me/79252357090" target="blank">Telegram</a>
            </li>
            <li className="about-me__link">
              <a className="about-me__link-text" href="https://github.com/EugeneStepanovMoscow" target="blank">GitHub</a>
            </li>
          </ul>
        </div>
        <img className="about-me__foto" src={foto} alt="Разработчик"></img>
      </div>
      <div className="about-me__portfolio">
        <h4 className="about-me__porfolio-title">Портфолио</h4>
        <ul className="about-me__portfolio-list">
          <li className="about-me__portfolio-item">
            <a className="about-me__portfolio-link" href="https://github.com/EugeneStepanovMoscow/how-to-learn" target="blank">Статичный сайт
              <span className="about-me__portfolio-arrow">↗</span>
            </a>
          </li>
          <li className="about-me__portfolio-item">
            <a className="about-me__portfolio-link" href="https://github.com/EugeneStepanovMoscow/russian-travel" target="blank">Адаптивный сайт
              <span className="about-me__portfolio-arrow">↗</span>
            </a>
          </li>
          <li className="about-me__portfolio-item">
            <a className="about-me__portfolio-link" href="https://github.com/EugeneStepanovMoscow/react-mesto-api-full" target="blank">Одностраничное приложение
              <span className="about-me__portfolio-arrow">↗</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default AboutMe;

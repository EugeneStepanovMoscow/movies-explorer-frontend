import SectionTitle from "../SectionTitle/SectionTitle";

function AboutProject(

)
{
  return (
    <section className="about-project">
      <SectionTitle
        title={'О проекте'}
      />
        <div className="about-project__info">
          <div className="about-project__info-block">
            <h3 className="about-project__info-title">Дипломный проект включал 5 этапов</h3>
            <p className="about-project__info-text">Составление плана над бэкендом, верстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div className="about-project__info-block">
            <h3 className="about-project__info-title">На выполнение диплома ушло 5 недель</h3>
            <p className="about-project__info-text">У каждого этапа был мягкий и жесткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься</p>
          </div>
        </div>
        <div className="about-project__time-container">
          <div className="about-project__time-container-block about-project__time-container-block_black">
            <p className="about-project__time-block-text">1 неделя</p>
          </div>
          <div className="about-project__time-container-block about-project__time-container-block_gray">
            <p className="about-project__time-block-text">4 недели</p>
          </div>
          <div className="about-project__time-container-block">
            <p className="about-project__time-block-text">Back-end</p>
          </div>
          <div className="about-project__time-container-block">
            <p className="about-project__time-block-text">Front-end</p>
          </div>
        </div>
    </section>
  )
}

export default AboutProject;

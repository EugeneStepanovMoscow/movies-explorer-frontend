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
        <div className="about-project__time">
          <div className="about-project__text-box-small">
            <div className="about-project__text-box about-project__text-box_bg_black">
              <p className="about-project__time-text about-project__time-text_color_white">1 неделя</p>
            </div>
            <div className="about-project__text-box">
              <p className="about-project__time-text about-project__time-text_color_gray">Back-end</p>
            </div>
          </div >
          <div className="about-project__text-box-large">
            <div className="about-project__text-box about-project__text-box_bg_gray">
              <p className="about-project__time-text about-project__time-text_color_black">4 недели</p>
            </div>
            <div className="about-project__text-box">
              <p className="about-project__time-text about-project__time-text_color_gray">Front-end</p>
            </div>
          </div>
        </div>
    </section>
  )
}

export default AboutProject;

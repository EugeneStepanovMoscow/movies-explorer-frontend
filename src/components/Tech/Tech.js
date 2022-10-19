import SectionTitle from "../SectionTitle/SectionTitle";

function Tech() {
  return (
    <section className="tech">
      <SectionTitle
        title={'Технологии'}
      />
      <div className="tech__content">
        <h3 className="tech__title">7 технологий</h3>
        <p className="tech__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul className="tech__tech-list">
          <li className="tech__technology">
            <p className="tech__technology-text">HTML</p>
          </li>
          <li className="tech__technology">
            <p className="tech__technology-text">CSS</p>
          </li>
          <li className="tech__technology">
            <p className="tech__technology-text">JS</p>
          </li>
          <li className="tech__technology">
            <p className="tech__technology-text">React</p>
          </li>
          <li className="tech__technology">
            <p className="tech__technology-text">Git</p>
          </li>
          <li className="tech__technology">
            <p className="tech__technology-text">Express.js</p>
          </li>
          <li className="tech__technology">
            <p className="tech__technology-text">mongoDB</p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Tech;

import { solution } from '../data/content'
import Icon from './Icons'
import Reveal from './Reveal'

export default function QueHacemos() {
  return (
    <section className="section section--sunken" id="solucion">
      <div className="container">
        <Reveal className="section__head">
          <p className="section__eyebrow">{solution.eyebrow}</p>
          <h2 className="section__title">{solution.title}</h2>
          <p className="section__lead">{solution.lead}</p>
        </Reveal>

        <div className="features">
          {solution.items.map((item, i) => (
            <Reveal className="feature" key={item.title} delay={i * 70}>
              <span className="feature__icon">
                <Icon name={item.icon} size={26} />
              </span>
              <h3 className="feature__title">{item.title}</h3>
              <p className="feature__body">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

import { foda } from '../data/content'
import Reveal from './Reveal'

export default function Foda() {
  return (
    <section className="section section--dark" id="foda">
      <div className="container">
        <Reveal className="section__head">
          <p className="section__eyebrow">{foda.eyebrow}</p>
          <h2 className="section__title">{foda.title}</h2>
          <p className="section__lead">{foda.lead}</p>
        </Reveal>

        <div className="foda">
          {foda.quadrants.map((quadrant, i) => (
            <Reveal
              className={`foda__quadrant foda__quadrant--${quadrant.tone}`}
              key={quadrant.key}
              delay={i * 90}
            >
              <header className="foda__head">
                <h3 className="foda__label">{quadrant.label}</h3>
                <span className="foda__caption">{quadrant.caption}</span>
              </header>

              <ul className="foda__items">
                {quadrant.items.map((item) => (
                  <li className="foda__item" key={item.title}>
                    <h4 className="foda__item-title">{item.title}</h4>
                    <p className="foda__item-body">{item.body}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

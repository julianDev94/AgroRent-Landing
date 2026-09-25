import { identity } from '../data/content'
import Reveal from './Reveal'

export default function Identidad() {
  return (
    <section className="section" id="identidad">
      <div className="container">
        <Reveal className="section__head">
          <p className="section__eyebrow">{identity.eyebrow}</p>
          <h2 className="section__title">{identity.title}</h2>
        </Reveal>

        <div className="pillars">
          {identity.items.map((item, i) => (
            <Reveal
              className={`pillar pillar--${item.tone}`}
              key={item.tag}
              delay={i * 110}
            >
              <span className="pillar__tag">{item.tag}</span>
              <p className="pillar__body">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

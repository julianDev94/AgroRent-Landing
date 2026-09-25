import { team } from '../data/content'
import Reveal from './Reveal'

const initialsOf = (name) =>
  name
    .split(',')[0]
    .trim()
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

export default function Equipo() {
  return (
    <section className="section" id="equipo">
      <div className="container">
        <Reveal className="section__head">
          <p className="section__eyebrow">{team.eyebrow}</p>
          <h2 className="section__title">{team.title}</h2>
          <p className="section__lead">{team.lead}</p>
        </Reveal>

        <ul className="team">
          {team.members.map((member, i) => (
            <Reveal as="li" className="team__card" key={member.id} delay={i * 80}>
              <span className="team__avatar" aria-hidden="true">
                {initialsOf(member.name)}
              </span>
              <h3 className="team__name">{member.name}</h3>
              <p className="team__id">
                <span className="team__id-label">Legajo</span>
                {member.id}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

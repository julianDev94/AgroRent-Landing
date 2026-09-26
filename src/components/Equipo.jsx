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

        <ul 
          className="team" 
          style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            gap: '20px',
            maxWidth: '1000px',
            margin: '0 auto'
          }}
        >
          {team.members.map((member, i) => (
            <Reveal 
              as="li" 
              className="team__card" 
              key={member.name} 
              delay={i * 80}
              style={{ flex: '1 1 280px', maxWidth: '300px', textAlign: 'center' }}
            >
              <div 
                className="team__avatar" 
                aria-hidden="true" 
                style={{ 
                  overflow: 'hidden', 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center' 
                }}
              >
                {member.image ? (
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                ) : (
                  initialsOf(member.name)
                )}
              </div>
              <h3 className="team__name" style={{ marginTop: '12px' }}>{member.name}</h3>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
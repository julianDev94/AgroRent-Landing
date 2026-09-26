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

        {/* Contenedor con estilos en línea para alinear y repartir las tarjetas */}
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
              // Ancho controlado para que entren 3 en la primera fila y bajen 2 abajo
              style={{ flex: '1 1 280px', maxWidth: '300px' }}
            >
              <span className="team__avatar" aria-hidden="true">
                {initialsOf(member.name)}
              </span>
              <h3 className="team__name">{member.name}</h3>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
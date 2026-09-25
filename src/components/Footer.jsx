import { institution, team } from '../data/content'
import Icon from './Icons'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__wordmark">
            Agro<span>Rent</span>
          </span>
          <p className="footer__tagline">
            Infraestructura de alquiler para la cadena agroindustrial del NOA.
          </p>
        </div>

        <div className="footer__col">
          <h3 className="footer__col-title">Institución</h3>
          <p>{institution.university}</p>
          <p>{institution.faculty}</p>
          <p>{institution.department}</p>
        </div>

        <div className="footer__col">
          <h3 className="footer__col-title">Trabajo práctico</h3>
          <p>{institution.course}</p>
          <p className="footer__muted">{institution.assignment}</p>
        </div>

        <div className="footer__col">
          <h3 className="footer__col-title">Docentes</h3>
          {institution.teachers.map((teacher) => (
            <p key={teacher}>{teacher}</p>
          ))}
        </div>
      </div>

      <div className="container footer__base">
        <p>
          {team.members.map((m) => m.name).join(' · ')}
        </p>
        <p className="footer__base-right">
          Proyecto académico
          <Icon name="arrow" size={15} />
          UTN FRT · 2026
        </p>
      </div>
    </footer>
  )
}

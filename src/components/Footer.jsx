import { team } from '../data/content'


export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        
        <div className="footer__brand">
          <span className="footer__wordmark">
            Agro<span>Rent</span>
          </span>
          <p className="footer__tagline">
            Infraestructura de alquiler inteligente para la cadena agroindustrial del NOA.
          </p>
        </div>

       
        <div className="footer__col">
          <h3 className="footer__col-title">Contacto</h3>
          <p>📍 Av. Aconquija 1200, Yerba Buena, Tucumán</p>
          <p>📞 +54 381 456-7890</p>
          <p>✉️ contacto@agrorent-noa.com</p>
        </div>

       
        <div className="footer__col">
          <h3 className="footer__col-title">Navegación</h3>
          <p><a href="#inicio">Inicio</a></p>
          <p><a href="#solucion">La Plataforma</a></p>
          <p><a href="#foda">Ventajas</a></p>
          <p><a href="#equipo">Equipo</a></p>
        </div>

       
        <div className="footer__col">
          <h3 className="footer__col-title">Legal</h3>
          <p><a href="#">Términos y Condiciones</a></p>
          <p><a href="#">Política de Privacidad</a></p>
          <p><a href="#">Contratos y Certificaciones</a></p>
        </div>
      </div>

    
    <div className="container footer__base" style={{ display: 'block', textAlign: 'center' }}>
        <p className="footer__base-right" style={{ margin: '0 auto' }}>
          © 2026 AgroRent S.A. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
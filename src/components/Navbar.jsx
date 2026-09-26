import { useEffect, useState } from 'react'
import { nav } from '../data/content'
import Icon from './Icons'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(() => typeof window !== 'undefined' && window.scrollY > 24)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = nav
      .map((item) => document.getElementById(item.id))
      .filter(Boolean)
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (hit) setActive(hit.target.id)
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5] },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a className="navbar__brand" href="#inicio">
          <span className="navbar__mark" aria-hidden="true">
            <svg viewBox="0 0 32 32" width="32" height="32">
              <rect width="32" height="32" rx="8" fill="currentColor" />
              <path d="M16 25V13" stroke="#F7F7F2" strokeWidth="2.2" strokeLinecap="round" />
              <path d="M16 14c0-3.9 3.1-7 7-7 0 3.9-3.1 7-7 7Z" fill="#FF8000" />
              <path d="M16 18c0-3.3-2.7-6-6-6 0 3.3 2.7 6 6 6Z" fill="#7FBF6A" />
              <rect x="11" y="25" width="10" height="2.2" rx="1.1" fill="#F7F7F2" />
            </svg>
          </span>
          {/* Si no está scrolleado es blanco (#ffffff), si scroleas usa el color por defecto */}
          <span className="navbar__wordmark" style={{ color: scrolled ? undefined : '#ffffff' }}>
            Agro<span>Rent</span>
          </span>
        </a>

        <nav className="navbar__nav" aria-label="Secciones">
          {nav.map((item) => (
            <a
              key={item.id}
              className={`navbar__link ${active === item.id ? 'navbar__link--active' : ''}`}
              href={`#${item.id}`}
              style={{ color: scrolled ? undefined : '#ffffff' }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a className="navbar__cta" href="#solucion">
          Ver la plataforma
          <Icon name="arrow" size={17} className="navbar__cta-icon" />
        </a>
      </div>
    </header>
  )
}
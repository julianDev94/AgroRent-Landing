import { useEffect, useState } from 'react'
import { nav } from '../data/content'
import Icon from './Icons'

const PLATFORM_URL = 'https://agrorent-sistema.netlify.app/'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(() => typeof window !== 'undefined' && window.scrollY > 24)
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)
  const solid = scrolled || open

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

  useEffect(() => {
    if (!open) return
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  useEffect(() => {
    const media = window.matchMedia('(min-width: 861px)')
    const onChange = (event) => {
      if (event.matches) setOpen(false)
    }
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${open ? 'navbar--open' : ''}`}>
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
          <span className="navbar__wordmark" style={{ color: solid ? undefined : '#ffffff' }}>
            Agro<span>Rent</span>
          </span>
        </a>

        <nav className="navbar__nav" aria-label="Secciones">
          {nav.map((item) => (
            <a
              key={item.id}
              className={`navbar__link ${active === item.id ? 'navbar__link--active' : ''}`}
              href={`#${item.id}`}
              style={{ color: solid ? undefined : '#ffffff' }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a className="navbar__cta" href={PLATFORM_URL}>
          Ver la plataforma
          <Icon name="arrow" size={17} className="navbar__cta-icon" />
        </a>

        <button
          className="navbar__toggle"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          aria-controls="navbar-mobile"
          style={{ color: solid ? undefined : '#ffffff' }}
        >
          <Icon name={open ? 'close' : 'menu'} size={22} />
        </button>

        <nav
          id="navbar-mobile"
          className={`navbar__menu ${open ? 'navbar__menu--open' : ''}`}
          aria-label="Secciones"
        >
          {nav.map((item) => (
            <a
              key={item.id}
              className={`navbar__menu-link ${active === item.id ? 'navbar__menu-link--active' : ''}`}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a className="navbar__menu-cta" href={PLATFORM_URL} onClick={() => setOpen(false)}>
            Ver la plataforma
            <Icon name="arrow" size={17} className="navbar__cta-icon" />
          </a>
        </nav>
      </div>
    </header>
  )
}
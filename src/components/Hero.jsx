import { hero } from '../data/content'
import Icon from './Icons'

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__field" aria-hidden="true">
        <svg className="hero__contours" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
          <g fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M-50 640c220-120 420-40 620-140s380-260 640-230 320 180 300 320" />
            <path d="M-50 700c220-120 430-60 630-160s400-250 650-220 300 170 280 310" />
            <path d="M-50 760c220-120 440-80 640-180s420-240 660-210 280 160 260 300" />
            <path d="M-50 820c220-120 450-100 650-200s440-230 670-200 260 150 240 290" />
            <path d="M-50 580c210-110 400-20 600-120s360-250 620-220 340 190 320 330" />
            <path d="M-50 520c200-100 380 0 580-100s340-240 600-210 360 200 340 340" />
          </g>
        </svg>
      </div>

      <div className="hero__inner">
        <p className="hero__badge">
          <span className="hero__badge-dot" />
          {hero.badge}
        </p>

        <h1 className="hero__title">
          {hero.titleLead}
          <span className="hero__title-accent">{hero.titleAccent}</span>
        </h1>

        <p className="hero__subtitle">{hero.subtitle}</p>

        <div className="hero__actions">
          <a className="btn btn--primary" href="#solucion">
            {hero.primaryCta}
            <Icon name="arrow" size={18} />
          </a>
          <a className="btn btn--ghost" href="#identidad">
            {hero.secondaryCta}
          </a>
        </div>

        <dl className="hero__stats">
          {hero.stats.map((stat) => (
            <div className="hero__stat" key={stat.label}>
              <dt className="hero__stat-label">{stat.label}</dt>
              <dd className="hero__stat-value">
                {stat.value}
                <span className="hero__stat-suffix">{stat.suffix}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

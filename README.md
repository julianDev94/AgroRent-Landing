# AgroRent — Landing de presentación

Landing page institucional de AgroRent, la empresa ficticia del TP N.º 1 de Administración de Sistemas de Información (4K3, UTN FRT).

## Comandos

```bash
npm run dev       # Servidor de desarrollo
npm run build     # Build de producción → dist/
npm run lint      # oxlint
npm run preview   # Sirve el build de producción
```

El lint es **oxlint** (no ESLint) — es lo que trae el template actual de Vite, configurado en `.oxlintrc.json`.

## Stack

- **React 19** + **Vite 8**, JavaScript plano (sin TypeScript).
- **Sin router**: página única con scroll suave y anclas. `html { scroll-padding-top }` compensa el navbar fijo.
- **Sin dependencias nuevas**: iconos SVG inline en `src/components/Icons.jsx`.
- **Sin imágenes raster**: los visuales son CSS + SVG (contornos topográficos del hero, gradientes).
- **Fuentes**: Outfit (display) + DM Sans (body), vía Google Fonts.

## Estructura

| Archivo | Rol |
|---|---|
| `src/data/content.js` | **Todo el copy** de la página. Editar acá, no en los `.jsx`. |
| `src/components/Reveal.jsx` | Animación de entrada con `IntersectionObserver` |
| `src/components/Navbar.jsx` | Navbar sticky + scrollspy (resalta la sección visible) |
| `src/index.css` | Tokens (`:root`), reset, tipografía, `prefers-reduced-motion` |
| `src/App.css` | Todos los estilos de componentes, BEM (`block__element--modifier`) |

Secciones: Hero · La plataforma · Identidad · Análisis FODA · Equipo · Footer.

## Convenciones

- Textos en **español rioplatense** (voseo).
- Paleta como variables CSS (`--green-primary`, `--orange-cta`, `--slate`…). Nunca hex sueltos.
- Las clases de tono del FODA y de Identidad (`--green`, `--orange`, `--red`, `--slate`) comparten el mismo naming en ambos componentes.
- Sin datos hardcodeados en los `.jsx`: todo sale de `content.js`.

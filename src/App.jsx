import Navbar from './components/Navbar'
import Hero from './components/Hero'
import QueHacemos from './components/QueHacemos'
import Identidad from './components/Identidad'
import Foda from './components/Foda'
import Equipo from './components/Equipo'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <QueHacemos />
        <Identidad />
        <Foda />
        <Equipo />
      </main>
      <Footer />
    </>
  )
}

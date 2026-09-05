import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Workflow from './components/Workflow'
import Integrations from './components/Integrations'
import UseCases from './components/UseCases'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Workflow />
        <Integrations />
        <UseCases />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App

import { Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './views/Home'
import AboutView from './views/AboutView'
import ProcessView from './views/ProcessView'
import ContactView from './views/ContactView'
import EntityForm from './views/Services/EntityForm'
import HoldingForm from './views/Services/HoldingForm'
import CorporateForm from './views/Services/CorporateForm'
import ResidentForm from './views/Services/ResidentForm'
import Confiden from './components/sections/Confiden'
import ScrollToTop from './components/utils/ScrollToTop'

function App() {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <Header />
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutView />} />
          <Route path="/process" element={<ProcessView />} />
          <Route path="/contact" element={<ContactView />} />
          <Route path="/services/entity-formation" element={<EntityForm />} />
          <Route path="/services/holding-structures" element={<HoldingForm />} />
          <Route path="/services/corporate-governance" element={<CorporateForm />} />
          <Route path="/services/resident-agent" element={<ResidentForm />} />
          <Route path="/confidentiality" element={<Confiden />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App

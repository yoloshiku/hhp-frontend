import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/global.css'

import Header from './layout/Header'
import Footer from './layout/Footer'

import Home from './pages/Home'
import MedicalDisclaimer from './pages/MedicalDisclaimer'
import AboutUs from './pages/AboutUs'
import MeetTheTeam from './pages/MeetTheTeam'
import WhoWeServe from './pages/WhoWeServe'
import SupportHHP from './pages/SupportHHP'
import Volunteer from './pages/Volunteer'
import Intern from './pages/Intern'
import BecomePartner from './pages/BecomePartner'
import MatchingDonations from './pages/MatchingDonations'
import Donate from './pages/Donate'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/medical-disclaimer" element={<MedicalDisclaimer />} />

            <Route path="/who-we-are/about-us" element={<AboutUs />} />
            <Route path="/who-we-are/meet-the-team" element={<MeetTheTeam />} />

            <Route path="/why-hhp/who-we-serve" element={<WhoWeServe />} />

            <Route path="/how-to-help/support-hhp" element={<SupportHHP />} />
            <Route path="/how-to-help/volunteer" element={<Volunteer />} />
            <Route path="/how-to-help/intern" element={<Intern />} />
            <Route path="/how-to-help/become-hhp-partner" element={<BecomePartner />} />
            <Route path="/how-to-help/matching-donations" element={<MatchingDonations />} />

            <Route path="/donate" element={<Donate />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

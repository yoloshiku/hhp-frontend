import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./styles/global.css"

import { AuthProvider } from "./context/AuthContext"
import Header from "./layout/Header"
import Footer from "./layout/Footer"

/* Pages */
import Home from "./pages/Home"
import MedicalDisclaimer from "./pages/MedicalDisclaimer"
import AboutUs from "./pages/AboutUs"
import MeetTheTeam from "./pages/MeetTheTeam"
import WhoWeServe from "./pages/WhoWeServe"
import SupportHHP from "./pages/SupportHHP"
import Volunteer from "./pages/Volunteer"
import Intern from "./pages/Intern"
import BecomePartner from "./pages/BecomePartner"
import MatchingDonations from "./pages/MatchingDonations"
import Donate from "./pages/Donate"
import Login from "./pages/Login"
import Signup from "./pages/Signup"

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="app">
          <Header />

          <main>
            <Routes>
              {/* Home */}
              <Route path="/" element={<Home />} />

              {/* Legal */}
              <Route path="/medical-disclaimer" element={<MedicalDisclaimer />} />

              {/* Who We Are */}
              <Route path="/who-we-are/about-us" element={<AboutUs />} />
              <Route path="/who-we-are/meet-the-team" element={<MeetTheTeam />} />

              {/* Why HHP */}
              <Route path="/why-hhp/who-we-serve" element={<WhoWeServe />} />

              {/* How to Help */}
              <Route path="/how-to-help/support-hhp" element={<SupportHHP />} />
              <Route path="/how-to-help/volunteer" element={<Volunteer />} />
              <Route path="/how-to-help/intern" element={<Intern />} />
              <Route
                path="/how-to-help/become-hhp-partner"
                element={<BecomePartner />}
              />
              <Route
                path="/how-to-help/matching-donations"
                element={<MatchingDonations />}
              />

              {/* Auth */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />

              {/* Donate */}
              <Route path="/donate" element={<Donate />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </AuthProvider>
    </Router>
  )
}

export default App

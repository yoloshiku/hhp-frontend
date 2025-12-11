import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="hhp-header">
      <div className="hhp-header-inner">
        {/* LOGO -> HOME */}
        <Link to="/" className="hhp-logo-link">
          <img src="/hhp-logo.png" alt="Human Health Project logo" className="hhp-logo" />
        </Link>

        <nav className="hhp-nav">
          {/* MEDICAL DISCLAIMER */}
          <Link to="/medical-disclaimer" className="nav-item">MEDICAL DISCLAIMER</Link>

          {/* WHO WE ARE */}
          <div className="dropdown">
            <span className="nav-item">WHO WE ARE ▾</span>
            <div className="dropdown-menu">
              <Link to="/who-we-are/about-us">ABOUT US</Link>
              <Link to="/who-we-are/meet-the-team">MEET THE TEAM</Link>
            </div>
          </div>

          {/* WHY HHP */}
          <div className="dropdown">
            <span className="nav-item">WHY HHP ▾</span>
            <div className="dropdown-menu">
              <Link to="/why-hhp/who-we-serve">WHO WE SERVE</Link>
            </div>
          </div>

          {/* HOW TO HELP */}
          <div className="dropdown">
            <span className="nav-item">HOW TO HELP ▾</span>
            <div className="dropdown-menu">
              <Link to="/how-to-help/support-hhp">SUPPORT HHP</Link>
              <Link to="/how-to-help/volunteer">VOLUNTEER</Link>
              <Link to="/how-to-help/intern">INTERN</Link>
              <Link to="/how-to-help/become-hhp-partner">BECOME A HHP PARTNER</Link>
              <Link to="/how-to-help/matching-donations">MATCHING DONATIONS</Link>
            </div>
          </div>

          {/* DONATE */}
          <Link to="/donate" className="btn btn-primary donate-btn">
            DONATE
          </Link>
        </nav>
      </div>
    </header>
  );
}

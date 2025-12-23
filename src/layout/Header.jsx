import { Link, NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="hhp-header">
      <div className="hhp-header-inner">
        {/* LOGO */}
        <Link to="/" className="hhp-logo-link">
        <img src="/hhp-logo.png" alt="Human Health Project" className="hhp-logo" />
        </Link>

        {/* RIGHT SIDE */}
        <div className="hhp-header-right">
          <nav className="hhp-nav">
            <NavLink to="/medical-disclaimer" className="nav-item">
              MEDICAL DISCLAIMER
            </NavLink>

            <div className="dropdown">
              <span className="nav-item">
                WHO WE ARE ▾
              </span>
              <div className="dropdown-menu">
                <NavLink to="/who-we-are/about-us">ABOUT US</NavLink>
                <NavLink to="/who-we-are/meet-the-team">MEET THE TEAM</NavLink>
              </div>
            </div>

            <div className="dropdown">
              <span className="nav-item">
                WHY HHP ▾
              </span>
              <div className="dropdown-menu">
                <NavLink to="/why-hhp/who-we-serve">WHO WE SERVE</NavLink>
              </div>
            </div>

            <div className="dropdown">
              <span className="nav-item">
                HOW TO HELP ▾
              </span>
              <div className="dropdown-menu">
                <NavLink to="/how-to-help/support-hhp">SUPPORT HHP</NavLink>
                <NavLink to="/how-to-help/volunteer">VOLUNTEER</NavLink>
                <NavLink to="/how-to-help/intern">INTERN</NavLink>
                <NavLink to="/how-to-help/become-hhp-partner">
                  BECOME A HHP PARTNER
                </NavLink>
                <NavLink to="/how-to-help/matching-donations">
                  MATCHING DONATIONS
                </NavLink>
              </div>
            </div>
          </nav>

          {/* BUTTONS */}
          <NavLink to="/donate" className="btn btn-primary donate-btn">
            DONATE
          </NavLink>

          <NavLink to="/login" className="btn btn-secondary join-btn">
            JOIN US / LOG IN
          </NavLink>
        </div>
      </div>
    </header>
  );
}

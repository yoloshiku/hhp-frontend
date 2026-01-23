import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Header.css";

export default function Header() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  // Get display name or email
  const getUserDisplayName = () => {
    if (currentUser?.displayName) {
      return currentUser.displayName.split(" ")[0]; // First name only
    }
    if (currentUser?.email) {
      return currentUser.email.split("@")[0]; // Email prefix
    }
    return "User";
  };

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
            {/* WHAT WE DO */}
            <div className="dropdown">
              <span className="nav-item">WHAT WE DO ▾</span>

              <div className="dropdown-menu">
                {/* Healthcare Access */}
                <div className="dropdown-submenu">
                  <span className="submenu-title">
                    HEALTHCARE ACCESS <span>›</span>
                  </span>

                  <div className="dropdown-submenu-menu">
                    <NavLink to="/what-we-do/healthcare-access/introduction">INTRODUCTION</NavLink>

                    {/* Patient Advocacy */}
                    <div className="dropdown-submenu nested">
                      <span className="submenu-title">
                        PATIENT ADVOCACY <span>›</span>
                      </span>
                      <div className="dropdown-submenu-menu">
                        <NavLink to="/what-we-do/patient-advocacy/northern-ireland">
                          PATIENT ADVOCACY - NORTHERN IRELAND
                        </NavLink>
                        <NavLink to="/what-we-do/patient-advocacy/los-angeles">
                          PATIENT ADVOCACY - LOS ANGELES
                        </NavLink>
                      </div>
                    </div>

                    {/* Learning Academy */}
                    <div className="dropdown-submenu nested">
                      <span className="submenu-title">
                        LEARNING ACADEMY <span>›</span>
                      </span>
                      <div className="dropdown-submenu-menu">
                        <NavLink to="/what-we-do/learning-academy/videos">LEARNING ACADEMY VIDEOS</NavLink>
                        <NavLink to="/what-we-do/learning-academy/english">LEARNING ACADEMY - ENGLISH</NavLink>
                        <NavLink to="/what-we-do/learning-academy/spanish">LEARNING ACADEMY - SPANISH</NavLink>
                        <NavLink to="/what-we-do/learning-academy/mandarin">LEARNING ACADEMY - MANDARIN</NavLink>
                      </div>
                    </div>

                    <NavLink to="/what-we-do/online-events">ONLINE EVENTS</NavLink>
                  </div>
                </div>

                {/* Stop Type 2 Diabetes */}
                <div className="dropdown-submenu">
                  <span className="submenu-title">
                    STOP TYPE 2 DIABETES <span>›</span>
                  </span>
                  <div className="dropdown-submenu-menu">
                    <NavLink to="/what-we-do/stop-type-2-diabetes/introduction">INTRODUCTION</NavLink>
                  </div>
                </div>

                {/* Shared Patient Information */}
                <NavLink to="/what-we-do/shared-patient-information">
                  SHARED PATIENT INFORMATION
                </NavLink>
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
                <NavLink to="/how-to-help/">SUPPORT HHP</NavLink>
                <NavLink to="/how-to-help/#volunteer">VOLUNTEER</NavLink>
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

          {currentUser ? (
            <div className="user-menu dropdown">
              <span className="btn btn-secondary user-btn">
                {getUserDisplayName()} ▾
              </span>
              <div className="dropdown-menu user-dropdown">
                <span className="user-email">{currentUser.email}</span>
                <button onClick={handleLogout} className="logout-btn">
                  LOG OUT
                </button>
              </div>
            </div>
          ) : (
            <NavLink to="/login" className="btn btn-secondary join-btn">
              JOIN US / LOG IN
            </NavLink>
          )}
        </div>
      </div>
    </header>
  );
}

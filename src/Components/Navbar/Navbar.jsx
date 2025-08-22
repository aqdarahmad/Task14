import { Link, useNavigate } from "react-router-dom";
import './navbar.css';
import { useContext } from "react";
import { UserContext } from "../../App";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../../ThemeContext/ThemeProvider";

export default function Navbar({ logo }) {
  const { userinfo, setuserinfo } = useContext(UserContext);
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleLogout = () => {
    setuserinfo(null);
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className={`navbar-container ${theme}`}>
      <nav className="navbar">
        <div className="logo">{logo}</div>
        <ul className="navbar-list">
          {userinfo && (
            <>
              <li className="navbar-item">
                <Link to="/" className="navbar-link">Home</Link>
              </li>
              <li className="navbar-item">
                <Link to="/saved" className="navbar-link">Saved</Link>
              </li>
              <li className="navbar-item">
                {userinfo && <button onClick={handleLogout}>Logout</button>}
              </li>
            </>
          )}

          <li className="navbar-item theme-toggle">
            <button
              onClick={toggleTheme}
              className="theme-button"
              aria-label="Toggle Theme"
            >
              {theme === "light" ? <FaMoon /> : <FaSun />}
            </button>
          </li>
        </ul>

        {userinfo && (
          <div className="user-info">
            <h4>{userinfo.fullname}</h4>
          </div>
        )}
      </nav>
    </div>
  );
}

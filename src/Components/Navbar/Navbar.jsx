import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";
import { ThemeContext } from "../../Contexts/ThemeContext";
import { Link } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import './navbar.css';

export default function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);
  const { user, token, logout } = useContext(UserContext);

  if (!token) return null;

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className={`navbar ${theme}`}>
      <div className="nav-links">
        <Link to="/home" className="nav-link">Home</Link>

     
        <span style={{ marginRight: "15px" }}>
          Welcome, {user.name}
        </span>

        <button onClick={logout}>Logout</button>

        <button 
          onClick={toggleTheme} 
          className="nav-button theme-toggle"
        >
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>
      </div>
    </nav>
  );
}

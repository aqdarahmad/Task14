import { Link } from "react-router-dom";
import './navbar.css'
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../../ThemeContext/ThemeProvider";
export default function Navbar() {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={`navbar-container ${theme}`}>
            <nav className="navbar">
                <ul className="navbar-list">
                    <li className="navbar-item">
                        <Link to="/" className="navbar-link">Home</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/saved" className="navbar-link">Saved</Link>
                    </li>
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
            </nav>
        </div>
    );
}

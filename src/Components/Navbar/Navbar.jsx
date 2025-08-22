import { Link } from "react-router-dom";
import './navbar.css'
export default function Navbar() {
    return (
        <div className="navbar-container">
        <nav className="navbar">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                    <Link to="/create">Create</Link>
                </li>
            </ul>
        </nav>
        </div>
    )
}

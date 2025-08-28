import { useContext } from "react"
import { UserContext } from "../../Contexts/UserContext"
import { Link } from "react-router-dom";
import './navbar.css'


export default function Navbar() {

    const {logout , token} = useContext(UserContext);

      if (!token) return null;


  return (
   
    <nav  className="navbar">
      <div className="nav-links">

        <Link to="/home" className="nav-link">Home</Link>

        <button onClick={logout} className="nav-button"> logout</button>
     </div>
    </nav>


    
  )
}

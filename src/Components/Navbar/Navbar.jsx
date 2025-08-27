import { useContext } from "react"
import { userContext } from "../../Contexts/userContext"


export default function Navbar() {

    const [logout , token] = useContext(userContext);

      if (!token) return null;


  return (
   
    <nav  style={{ padding: "10px", background: "#f5f5f5" }} >

        <Link to="/home" style={{ marginRight: "15px" }}>Home</Link>
        <Link to = "/about" style={{ marginRight: "15px" }}>About</Link>
        <button onClick={logout}> logout</button>

    </nav>


    
  )
}

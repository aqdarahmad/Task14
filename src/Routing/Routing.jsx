
import { Route, Routes } from 'react-router-dom'
import Login from '../Components/Login/Login'

import { UserContext } from '../Contexts/UserContext';
import { useContext } from 'react';
import Home from '../Pages/Home';



export default function Routing() {




  const {token} = useContext(UserContext);


  return (
   <>

     <Routes>
        {!token ? (
          <Route path="*" element={<Login />} />
        ) : (
          <>
            <Route path="/home" element={<Home />} />
         
            <Route path="*" element={<Home />} />
          </>
        )}
      </Routes>
  
    </>
 
   
 
  )
}


import { Route, Routes } from 'react-router-dom'
import Login from '../Components/Login'
import { useState } from 'react'
import { userContext } from '../Contexts/userContext';

export default function Routing() {


  const [userInfo , setuserInfo] = useState();


  return (
   <>
   <userContext.Provider value={{userInfo , setuserInfo}}>
   <Routes>
    <Route index element={<Login/>}/>
   </Routes>
   </userContext.Provider>
   
   </>
  )
}

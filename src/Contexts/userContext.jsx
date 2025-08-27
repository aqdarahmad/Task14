import { createContext , useEffect, useState } from "react";

export const userContext = createContext();

export const UserProvider = ({Children}) =>{
 const [token , setToken ] = useState(null);

 useEffect(()=>{
    const savedToken = localStorage.getItem("token");
    if(savedToken)

        setToken(savedToken);

 },[])

 const login = (newToken) =>{
    localStorage.setItem("token" , newToken);
    setToken(newToken);
 };

 const logout = ()=>{
    localStorage.removeItem("token");
    setToken(null);
 };
    return (
        <userContext.Provider value={{ token , login ,logout}}>
        {Children}
        </userContext.Provider>
    );
}




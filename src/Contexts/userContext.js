import { createContext , useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({Children}) =>{
    const [userInfo , setuserInfo] = useState();

    return (
        <UserContext.Provider value={{userInfo , setuserInfo}}>
        {Children}
        </UserContext.Provider>
    );
}



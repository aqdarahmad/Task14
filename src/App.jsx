import AppRouting from "./Routing/AppRouting";
import { ThemeProvider  } from "./ThemeContext/ThemeProvider";
import { createContext } from "react";
import { useState , useEffect } from "react";



export const UserContext = createContext(null);

export default function App() {
  const [userinfo, setuserinfo] = useState(null);
 
  
  return (
    <div>
       <ThemeProvider>
      <UserContext.Provider value={{ userinfo, setuserinfo }}>
       
          <AppRouting />
       
      </UserContext.Provider>
       </ThemeProvider>
    </div>
  )
}

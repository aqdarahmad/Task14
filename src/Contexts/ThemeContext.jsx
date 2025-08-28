import { createContext, useState } from "react"
import { useEffect } from "react";



export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const[ theme , setNewtheme] = useState(  localStorage.getItem("theme") || "light");
      useEffect(() => {
    localStorage.setItem("theme", theme); 
  }, [theme]);

    return (

        <ThemeContext.Provider value={{theme , setNewtheme}}>
            {children}
        </ThemeContext.Provider>
    );

}
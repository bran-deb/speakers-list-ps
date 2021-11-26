import React, { createContext, useState } from 'react';

//useContext
export const ThemeContext = createContext()

const ThemeProvider = ({ children, startingTheme }) => {

    const [theme, setTheme] = useState(startingTheme)

    return (
        // solo contiene los elementos que usaran el context
        <ThemeContext.Provider value={{ theme, setTheme, }}>
            {children /*aplica a todos los hijos*/}
        </ThemeContext.Provider>
    )
}

export { ThemeProvider };
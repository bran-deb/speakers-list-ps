import React, { createContext, } from 'react';
import useTheme from '../hooks/useTheme';

//useContext
export const ThemeContext = createContext()

const ThemeProvider = ({ children, startingTheme }) => {

    //se extrajo el state en useTheme
    const { theme, setTheme } = useTheme(startingTheme)

    return (
        // solo contiene los elementos que usaran el context
        <ThemeContext.Provider value={{ theme, setTheme, }}>
            {children /*aplica a todos los hijos*/}
        </ThemeContext.Provider>
    )
}

export { ThemeProvider };
import React, { useContext } from 'react';
import { ThemeContext, ThemeProvider } from '../context/ThemeContext'

const Layout = ({ startingTheme, children }) => {
    return (
        <ThemeProvider startingTheme={startingTheme}>
            <LayoutNoThemeProvider>{children}</LayoutNoThemeProvider>
        </ThemeProvider>
    )
}



function LayoutNoThemeProvider({ children }) {

    const { theme } = useContext(ThemeContext)

    return (
        // solo contiene los elementos que usaran el context
        <div className={
            theme === 'light'
                ? "container-fluid light"
                : "container-fluid dark"
        }>
            {children /*aplica a todos los hijos*/}
        </div>
    )
}
export default Layout
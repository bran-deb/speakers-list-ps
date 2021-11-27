import React, { createContext } from 'react'
import useSpeakerFilter from '../hooks/useSpeakerFilter'

//useContext
const SpeakerFilterContext = createContext()

const SpeakerFilterProvider = ({ children, startingShowSessions = false }) => {

    //se extrajo el state en useSpeakerFilter
    const { showSessions, setShowSessions } = useSpeakerFilter(startingShowSessions)

    return (
        //retorna los elementos que usara el context
        <SpeakerFilterContext.Provider
            value={
                { showSessions, setShowSessions }
            }
        >
            {children /*se lo manda a los hijos */}
        </SpeakerFilterContext.Provider>
    )
}

export { SpeakerFilterContext, SpeakerFilterProvider }

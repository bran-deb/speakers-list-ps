import React, { createContext } from 'react'
import useSpeakerFilter from '../hooks/useSpeakerFilter'

//useContext
const SpeakerFilterContext = createContext()

const SpeakerFilterProvider = ({
    children,
    startingShowSessions = false,
    startingEventYear = "2019"
}) => {

    //se extrajo el state en useSpeakerFilter
    const {
        showSessions,
        setShowSessions,
        eventYear,
        setEventYear,
        searchQuery,
        setSearchQuery,
        EVENT_YEARS,
    } = useSpeakerFilter(
        startingShowSessions,
        startingEventYear
    )

    return (
        //retorna los elementos que usara el context
        <SpeakerFilterContext.Provider
            value={{
                showSessions,
                setShowSessions,
                eventYear,
                setEventYear,
                searchQuery,
                setSearchQuery,
                EVENT_YEARS,
            }}
        >
            {children /*se lo manda a los hijos */}
        </SpeakerFilterContext.Provider>
    )
}

export { SpeakerFilterContext, SpeakerFilterProvider }

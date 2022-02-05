import { createContext } from "react";


const SpeakerContext = createContext()

const SpeakerProvider = ({ children, speaker, updateRecord }) => {
    return (
        <SpeakerContext.Provider value={{ speaker, updateRecord }}>
            {children}
        </SpeakerContext.Provider>
    )
}

export { SpeakerProvider, SpeakerContext }
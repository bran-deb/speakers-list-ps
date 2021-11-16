import { useState } from "react"

import SpeakersToolbar from "./SpeakersToolbar"
import SpeakersList from "./SpeakersList"


const Speakers = ({ theme, setTheme }) => {

    const [showSessions, setShowSessions] = useState(true)

    return (
        <>
            <SpeakersToolbar
                theme={theme}
                setTheme={setTheme}
                showSessions={showSessions}
                setShowSessions={setShowSessions}
            />
            <SpeakersList
                showSessions={showSessions}
            />
        </>
    )
}


export default Speakers

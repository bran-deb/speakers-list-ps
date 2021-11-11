import { useState } from "react"

import SpeakersToolbar from "./SpeakersToolbar"
import SpeakersList from "./SpeakersList"


const Speakers = ({ theme, setTheme, data }) => {

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
                data={data}
                showSessions={showSessions}
            />
        </>
    )
}


export default Speakers

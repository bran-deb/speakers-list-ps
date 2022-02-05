import { useState } from "react"

import SpeakersToolbar from "./SpeakersToolbar"
import SpeakersList from "./SpeakersList"
import { SpeakerFilterProvider } from "../context/SpeakerFilterContext"


const Speakers = () => {

    return (
        <SpeakerFilterProvider startingShowSessions={false}>
            <SpeakersToolbar />
            <SpeakersList />
        </SpeakerFilterProvider>
    )
}


export default Speakers

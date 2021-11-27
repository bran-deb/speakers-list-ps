import { useState } from "react";

const useSpeakerFilter = (startingShowSessions) => {

    const [showSessions, setShowSessions] = useState(startingShowSessions)

    return {
        showSessions,
        setShowSessions,
    }
}

export default useSpeakerFilter;
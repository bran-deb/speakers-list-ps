import Speaker from "./Speaker"
import { data } from "../../SpeakerData"
import { useState } from "react"

const SpeakersList = ({ showSessions }) => {

    const [speakersData, setSpeakersData] = useState(data)

    function onFavoriteToggle(id) {
        const speakersRecPrevious = speakersData.find((record) => {
            return record.id === id
        })
        const speakerRecUpdated = {
            ...speakersRecPrevious,
            favorite: !speakersRecPrevious.favorite,
        }
        const speakersDataNew = speakersData.map((record) => {
            return record.id === id ? speakerRecUpdated : record
        })

        setSpeakersData(speakersDataNew)
    }

    return (
        <div className="container speakers-list">
            <div className="row">
                {speakersData.map(speaker => {
                    return (
                        <Speaker
                            key={speaker.id}
                            speaker={speaker}
                            showSessions={showSessions}
                            onFavoriteToggle={() => {
                                onFavoriteToggle(speaker.id)
                            }}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default SpeakersList

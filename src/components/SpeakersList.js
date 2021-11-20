import Speaker from "./Speaker"
import { data } from "../../SpeakerData"
import { useState, useEffect } from "react"

const SpeakersList = ({ showSessions }) => {
    const [speakersData, setSpeakersData] = useState(data)
    const [isLoading, setIsLoading] = useState(true)
    const [hasErrored, setHasErrored] = useState(false)
    const [error, setError] = useState("")

    const delay = (ms) => {
        return new Promise((resolve) => {
            setTimeout(resolve, ms)
        })
    }

    useEffect(() => {
        async function delayfunc() {
            try {
                await delay(2000)
                throw "Had Error."
                setIsLoading(false)
                setSpeakersData(data)

            } catch (e) {
                setIsLoading(false)
                setHasErrored(true)
                setError(e)
            }
        }
        delayfunc()
    }, [])

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

    //verificamos si fue erroneo
    if (hasErrored === true) {
        return (
            <div className="text-danger">
                ERROR:
                <b> Loading Speaker Data Failed {error}</b>
            </div>
        )
    }

    //verificamos si esta cargando
    if (isLoading === true) {
        return <div>Loading...</div>
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

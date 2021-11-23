import { data } from '../../SpeakerData'
import { useState, useEffect } from 'react'

function useRequestSpeakers(delayTime = 1000) {
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
                await delay(delayTime)
                // throw "Had Error."
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
    return {
        speakersData, isLoading,
        hasErrored, error,
        onFavoriteToggle,
    }
}
export default useRequestSpeakers

import { useState, useEffect } from 'react'

export const REQUEST_STATUS = {
    LOADING: "loading",
    SUCCESS: "success",
    FAILLURE: "failure",
}

function useRequestDelay(delayTime = 1000, initialData = []) {

    const [data, setData] = useState(initialData)
    const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING)
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
                setRequestStatus(REQUEST_STATUS.SUCCESS)
                setData(data)

            } catch (e) {
                setRequestStatus(REQUEST_STATUS.FAILLURE)
                setHasErrored(true)
                setError(e)
            }
        }
        delayfunc()
    }, [])

    function updateRecord(recordUpdated, doneCallback) {
        const newRecords = data.map((rec) => {
            return rec.id === recordUpdated.id ? recordUpdated : rec
        })
        async function delayFunction() {
            try {
                await delay(delayTime)
                if (doneCallback) {
                    doneCallback()
                }
                setData(newRecords)

            } catch (e) {
                console.log("error throw inside delayFunction", error)
            }
        }
        delayFunction()
    }

    return {
        data,
        requestStatus,
        error,
        updateRecord,
    }
}
export default useRequestDelay
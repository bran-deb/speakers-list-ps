import { useState, useEffect } from 'react'
import axios from 'axios'


export const REQUEST_STATUS = {
    LOADING: "loading",
    SUCCESS: "success",
    FAILLURE: "failure",
}

const restUrl = 'api/speakers'

function useRequestRest() {

    const [data, setData] = useState([])
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
                //obtiene los datos del RestUrl
                const result = await axios.get(restUrl)
                setRequestStatus(REQUEST_STATUS.SUCCESS)
                setData(result.data)

            } catch (e) {
                setRequestStatus(REQUEST_STATUS.FAILLURE)
                // setHasErrored(true)
                setError(e)
            }
        }
        delayfunc()
    }, [])

    function updateRecord(record, doneCallback) {

        const originalRecords = [...data]
        const newRecords = data.map((rec) => {
            return rec.id === record.id ? record : rec
        })
        async function delayFunction() {
            try {
                setData(newRecords)
                // await delay(delayTime)
                //agregamos al "urlRest/id" el registro(record) a actualizar
                await axios.put(`${restUrl}/${record.id}`, record)
                if (doneCallback) {
                    doneCallback()
                }

            } catch (e) {
                console.log("error throw inside delayFunction", e)
                if (doneCallback) {
                    doneCallback()
                }
                setData(originalRecords)
            }
        }
        delayFunction()
    }

    function insertRecord(record, doneCallback) {

        const originalRecords = [...data]
        const newRecords = [record, ...data]
        async function delayFunction() {
            try {
                setData(newRecords)
                // await delay(delayTime)
                //agregamos 99999 como marcador de posicion
                //el server genera el speakerId, no tenemos id para pasarlo
                await axios.post(`${restUrl}/99999`, record)
                if (doneCallback) {
                    doneCallback()
                }

            } catch (e) {
                console.log("error throw inside delayFunction", e)
                if (doneCallback) {
                    doneCallback()
                }
                setData(originalRecords)
            }
        }
        delayFunction()
    }

    function deleteRecord(record, doneCallback) {

        const originalRecords = [...data]
        const newRecords = data.filter((rec) => {
            return rec.id != record.id
        })
        async function delayFunction() {
            try {
                setData(newRecords)
                // await delay(delayTime)
                //eliminamos del "urlRest/id" el (record)
                await axios.delete(`${restUrl}/${record.id}`, record)
                if (doneCallback) {
                    doneCallback()
                }

            } catch (e) {
                console.log("error throw inside delayFunction", e)
                if (doneCallback) {
                    doneCallback()
                }
                setData(originalRecords)
            }
        }
        delayFunction()
    }

    return {
        data,
        requestStatus,
        error,
        updateRecord,
        insertRecord,
        deleteRecord,
    }
}
export default useRequestRest
// import { data } from "../../../SpeakerData"
import path from "path"
import fs from 'fs'

//TODO:

const { promisify } = require("util")
//permite leer
const readFile = promisify(fs.readFile)
//permite escribir
const writeFile = promisify(fs.writeFile)
const delay = (ms) => new Promise((resolve) => { setTimeout(resolve, ms) })


const handler = (req, res) => {
    // res.status(200).send(JSON.stringify(data, null, 2))
    const method = req?.method          //sacamos el metodo de la consulta
    const id = parseInt(req?.query.id)  //sacamos el id de la consulta
    const recordFromBody = req?.body    //obtenemos el cuerpo de la publicacion
    const jsonFile = path.resolve("./", "db.json")

    switch (method) {
        case 'POST':
            await postMethod()
            break
        case 'PUT':
            await putMethod()
            break
        case 'DELETE':
            await deleteMethod()
            break
        default:
            res.status(501).send(`Method ${method} not implemented`)
            console.log(`Method ${method} not implemented`)
    }

    const putMethod = async () => {
        try {
            const readFileData = await readFile(jsonFile)
            await delay(1000)
            const speakers = JSON.parse(readFileData).speakers

            if (!speakers) {
                res.status(404).send('Error: Request failed with status code 404')
            } else {
                const newSpeakerArray = speakers.map((rec) => {
                    return rec.id == id ? recordFromBody : rec
                })
                writeFile(
                    jsonFile,
                    JSON.stringify({ speakers: newSpeakerArray }, null, 2)
                )
                res.setHeader("Content-type", "application/json")
                res.status(200).send(JSON.stringify(speakers, null, 2))
                console.log(`PUT /api/speakers/${id} status: 200`)
            }
        } catch (e) {
            res
                .status(500)
                .send(`PUT /api/speakers/${id} status: 500 unexpected error`)
            console.log(`PUT /api/speakers/${id} status: 200`, e);
        }
    }


    const postMethod = async () => {
        try {
            const readFileData = await readFile(jsonFile)
            await delay(1000)
            const speakers = JSON.parse(readFileData).speakers

            if (!speakers) {
                res.status(404).send('Error: Request failed with status code 404')
            } else {
                const idNew = speakers.reduce((accumulator, currentValue) => {
                    const idCurrent = parseInt(currentValue.id)
                    return idCurrent > accumulator ? idCurrent : accumulator
                }, 0) + 1

                const newSpeakerRec = { ...recordFromBody, id: idNew.toString() }

                const newSpeakerArray = [newSpeakerRec, ...speakers]

                writeFile(
                    jsonFile,
                    JSON.stringify({ speakers: newSpeakerArray }, null, 2)
                )
                res.setHeader("Content-type", "application/json")
                res.status(200).send(JSON.stringify(newSpeakerRec, null, 2))
                console.log(`PUT /api/speakers/${id} status: 200`)
            }
        } catch (e) {
            res
                .status(500)
                .send(`PUT /api/speakers/${id} status: 500 unexpected error`)
            console.log(`PUT /api/speakers/${id} status: 200`, e);
        }
    }


    const deleteMethod = async () => {
        try {
            const readFileData = await readFile(jsonFile)
            await delay(1000)
            const speakers = JSON.parse(readFileData).speakers

            if (!speakers) {
                res.status(404).send('Error: Request failed with status code 404')
            } else {
                const newSpeakerArray = speakers.filter((rec) => {
                    return rec.id != id
                })
                writeFile(
                    jsonFile,
                    JSON.stringify({ speakers: newSpeakerArray }, null, 2)
                )
                res.setHeader("Content-type", "application/json")
                res.status(200).send(
                    JSON.stringify(
                        speakers.find(rec => rec.id == id),
                        null,
                        2
                    ))
                console.log(`DELETE /api/speakers${id} status: 200`)
            }
        } catch (e) {
            res
                .status(500)
                .send(`DELETE /api/speakers/${id} status: 500 unexpected error`)
            console.log(`DELETE /api/speakers/${id} status: 200`, e);
        }
    }
}

export default handler
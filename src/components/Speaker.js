import { memo, useContext } from "react"
import { SpeakerFilterContext } from "../context/SpeakerFilterContext"
import SpeakerDemographics from "./SpeakerDemographics"
import SpeakerImg from "./SpeakerImg"
import Sessions from "./Sessions"
import { SpeakerProvider } from "../context/SpeakerContext"
import SpeakerDelete from "./SpeakerDelete"

//TODO:
//cuando se pasa una funcion por props el componente se vuelve
//a renderizar por que no sabe si sus valores cambiaron

//memo renderiza unicamente cuando los props de Speaker cambian
const Speaker = memo(({ speaker, updateRecord, insertRecord, deleteRecord }) => {

    //usamos react context para no pasar sessions en props
    const { showSessions } = useContext(SpeakerFilterContext)

    console.log(`speaker: ${speaker.id} ${speaker.first} ${speaker.last}`);

    return (
        // pasamos el speaker y update record a todos los children por medio del provider
        <SpeakerProvider
            speaker={speaker}
            updateRecord={updateRecord}
            insertRecord={insertRecord}
            deleteRecord={deleteRecord}
        >
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12"
            >
                <div className="card card-height p-4 mt-4">
                    <SpeakerImg />
                    <SpeakerDemographics />
                </div>
                {
                    showSessions === true ? <Sessions /> : null
                }
                <SpeakerDelete />
            </div>
        </SpeakerProvider>
    )
}, areEqualSpeaker)

//verifica que el favorite se haya actualizado o no
function areEqualSpeaker(prevProps, nextProps) {
    return (prevProps.speaker.favorite === nextProps.speaker.favorite)
}

export default Speaker
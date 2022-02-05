import { useContext } from "react"
import { SpeakerFilterContext } from "../context/SpeakerFilterContext"
import SpeakerDemographics from "./SpeakerDemographics"
import SpeakerImg from "./SpeakerImg"
import Sessions from "./Sessions"
import { SpeakerProvider } from "../context/SpeakerContext"


const Speaker = ({ speaker, updateRecord, insertRecord, deleteRecord }) => {

    //usamos react context para no pasar sessions en props
    const { showSessions } = useContext(SpeakerFilterContext)

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
                    showSessions === true
                        ? <Sessions />
                        : null
                }
            </div>
        </SpeakerProvider>
    )
}

export default Speaker
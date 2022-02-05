import { useContext } from "react"
import { SpeakerFilterContext } from "../context/SpeakerFilterContext"
import SpeakerDemographics from "./SpeakerDemographics"
import SpeakerImg from "./SpeakerImg"
import Sessions from "./Sessions"


const Speaker = ({ speaker, onFavoriteToggle }) => {

    //usamos react context para no pasar sessions en props
    const { showSessions } = useContext(SpeakerFilterContext)
    const { id, first, last, sessions } = speaker

    return (
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12"
        >
            <div className="card card-height p-4 mt-4">
                <SpeakerImg id={id} first={first} last={last} />
                <SpeakerDemographics {...speaker} onFavoriteToggle={onFavoriteToggle} />
            </div>
            {
                showSessions === true
                    ? <Sessions sessions={sessions} />
                    : null
            }
        </div>
    )
}

export default Speaker
import { useContext } from "react"
import { SpeakerFilterContext } from "../context/SpeakerFilterContext"
import Session from "./Session"


const Sessions = ({ sessions }) => {

    const { eventYear } = useContext(SpeakerFilterContext)

    return (
        <div className="sessionBox card h-250">
            {sessions
                .filter(session => {
                    return session.eventYear === eventYear
                })
                .map(session => {
                    return (
                        <div className="session w-100" key={session.id}>
                            <Session {...session} />
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Sessions
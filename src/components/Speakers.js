import { data } from "../../SpeakerData"
import SpeakersList from "./SpeakersList"


const Speakers = () => {
    return (
        <div className="container-fluid">
            <SpeakersList data={data} />
        </div>
    )
}

export default Speakers

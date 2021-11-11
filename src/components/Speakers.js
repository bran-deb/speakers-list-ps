import { data } from "../../SpeakerData"
import Header from "./Header"
import SpeakersList from "./SpeakersList"


const Speakers = () => {
    return (
        <div className="container-fluid">
            <Header />
            <SpeakersList data={data} />
        </div>
    )
}

export default Speakers

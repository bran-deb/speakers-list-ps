import { useContext } from "react"
import { SpeakerContext } from "../context/SpeakerContext";


const SpeakerImg = () => {
    //pasamos el speaker por context api
    const { speaker } = useContext(SpeakerContext);
    const { id, first, last } = speaker

    return (
        <div className="speaker-img d-flex flex-row justify-content-center align-items-center h-300">
            <img
                className="contain-fit"
                src={`/images/speaker-${id}.jpg`}
                width="300"
                alt={`${first} ${last}`}
            />
        </div>
    )
}

export default SpeakerImg
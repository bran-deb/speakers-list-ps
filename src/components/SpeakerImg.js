import { useContext, useState } from "react"
import { SpeakerContext } from "../context/SpeakerContext";

const ImageWithFallback = ({ src, ...props }) => {
    const [error, setError] = useState(false)
    const [imgSrc, setImgSrc] = useState(src)

    const onError = () => {
        if (!error) {
            setImgSrc('/images/speaker-99999.jpg')
            setError(true)
        }
    }
    return <img src={imgSrc} {...props} onError={onError} />
}

const SpeakerImg = () => {
    //pasamos el speaker por context api
    const { speaker } = useContext(SpeakerContext);
    const { id, first, last } = speaker

    return (
        <div className="speaker-img d-flex flex-row justify-content-center align-items-center h-300">
            <ImageWithFallback
                className="contain-fit"
                src={`/images/speaker-${id}.jpg`}
                width="300"
                alt={`${first} ${last}`}
            />
        </div>
    )
}

export default SpeakerImg
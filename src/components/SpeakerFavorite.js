import { useContext, useState } from "react"
import { SpeakerContext } from "../context/SpeakerContext";

const SpeakerFavorite = () => {

    const { speaker, updateRecord } = useContext(SpeakerContext);
    const { favorite } = speaker

    const [inTransition, setInTransition] = useState(false)

    function doneCallback() {
        setInTransition(false)
        console.log(
            `In SpeakerFavorite:doneCallback ${new Date().getMilliseconds()}`
        )
    }

    const handleClick = () => {
        setInTransition(true)

        updateRecord(
            {
                ...speaker, favorite: !favorite
            },
            doneCallback
        )
    }


    return (
        <div className="action padB1">

            <span onClick={handleClick} >
                <i className={
                    favorite === true
                        ? "fa fa-star orange"
                        : "fa fa-star-o orange"
                } />{" "}
                Favorite{" "}

                {
                    inTransition
                        ? <span className="fas fa-circle-notch fa-spin"></span>
                        : null
                }
            </span>
        </div>
    )
}

export default SpeakerFavorite

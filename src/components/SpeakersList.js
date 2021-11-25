import Speaker from "./Speaker"
import ReactPlaceholder from "react-placeholder/lib"
import useRequestDelay, { REQUEST_STATUS } from "./useRequestDelay"
import { data } from '../../SpeakerData'

const SpeakersList = ({ showSessions }) => {

    //custom hooks
    const {
        data: speakersData,
        requestStatus,
        error,
        updateRecord,
    } = useRequestDelay(2000, data)



    //verificamos si fue erroneo
    if (requestStatus === REQUEST_STATUS.FAILLURE) {
        return (
            <div className="text-danger">
                ERROR:
                <b> Loading Speaker Data Failed {error}</b>
            </div>
        )
    }

    return (
        <div className="container speakers-list">
            <ReactPlaceholder
                type="media"
                rows={15}
                className="speakerslist-placeholder"
                ready={requestStatus === REQUEST_STATUS.SUCCESS}
            >
                <div className="row">
                    {speakersData.map(speaker => {
                        return (
                            <Speaker
                                key={speaker.id}
                                speaker={speaker}
                                showSessions={showSessions}
                                onFavoriteToggle={() => {
                                    updateRecord({
                                        ...speaker,
                                        favorite: !speaker.favorite,
                                    })
                                }}
                            />
                        )
                    })}
                </div>
            </ReactPlaceholder>
        </div>
    )
}

export default SpeakersList

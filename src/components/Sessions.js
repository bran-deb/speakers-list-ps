import Session from "./Session"


const Sessions = ({ sessions }) => {
    return (<div className="sessionBox card h-250">
        <Session
            {...sessions[0]}
        />
    </div>
    )
}
export default Sessions
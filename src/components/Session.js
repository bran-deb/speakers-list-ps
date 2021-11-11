

const Session = ({ title, room }) => {
    return (
        <span
            className="session w-100">
            {title}<strong>Room: {room.name}</strong>
        </span>
    )
}

export default Session
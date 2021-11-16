import React from 'react'

const SpeakerFavorite = ({ favorite, onFavoriteToggle }) => {
    return (
        <div className="action padB1">
            <span onClick={onFavoriteToggle}>
                <i className={
                    favorite === true
                        ? "fa fa-star orange"
                        : "fa fa-star-o orange"
                } />{" "}
                Favorite{" "}
            </span>
        </div>
    )
}

export default SpeakerFavorite

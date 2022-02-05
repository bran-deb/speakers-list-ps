import React from 'react';

const SpeakerAdd = ({ eventYear, insertRecord }) => {

    const handleClick = (e) => {
        e.preventDefault()
        //objeto de ventana integrado
        const firstLast = window.prompt('Enter first and last name: ', '')
        //obtiene el nombre y apellido en un array
        const firstLastArray = firstLast.split(' ')
        insertRecord({
            id: '99999',
            first: firstLastArray[0],
            last: firstLastArray[1],
            bio: 'No not entered yet',
            sessions: [
                {
                    id: '88888',
                    title: `New Session For ${firstLastArray[0]}`,
                    room: {
                        name: 'Main Ball Room'
                    },
                    eventYear,
                }
            ]
        })
    }


    return (
        <a href='#' className='addSes'>
            <i onClick={handleClick}>
                +
            </i>
        </a>
    )
};

export default SpeakerAdd;

import React, { useContext } from 'react';
import { SpeakerContext } from '../context/SpeakerContext';

const SpeakerDelete = () => {

    const { speaker, deleteRecord } = useContext(SpeakerContext);

    const handleClick = (e) => {
        e.preventDefault()
        if (window.confirm('Are you sure you want to delete this speaker?')) {
            deleteRecord(speaker)
        }
    }


    return (
        <span className='session w-100'>
            <a href='#' className='remSes'>
                <i onClick={handleClick} />
            </a>
            <span className='padL2'>Delete Speaker</span>
        </span>
    )
}

export default SpeakerDelete;

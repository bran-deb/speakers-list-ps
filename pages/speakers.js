import React from 'react';
import withData from '../src/components/withData'

const Speakers = ({ speakers }) => {
    return (
        <div>
            {speakers.map(({ imageSrc, name }) => {
                return <img src={`images/${imageSrc}.jpg`} alt={name} key={imageSrc} />
            })}
        </div>
    )
}

//al momento de mandar el component lo hacemos en la funcion withData()
//mostrar solo 2 speakers
export default withData(2)(Speakers)
// export default withData(Speakers)
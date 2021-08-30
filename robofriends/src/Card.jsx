import React from 'react';
import 'tachyons';

function Card({id, name, email}) {
    return (
        <div className='card bg-light-green dib br3 pa3 ma3 grow pw2 shadow-5'>
            <img src={`https://robohash.org/${id}?100`} alt='Robos'/>
            <div className="info">
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
};

export default Card;
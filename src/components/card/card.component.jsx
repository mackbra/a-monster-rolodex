import React from 'react';

import './card.style.css';

export const Card = props => (
    <div className='card-container'>
        <img 
            alt='monster' 
            src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
            // Use accent mark. single & double quotes do no work b/c curly brackets are not allowed inside a string.
        />
        <h2> {props.monster.name} </h2>
        {props.monster.email}
    </div>
)
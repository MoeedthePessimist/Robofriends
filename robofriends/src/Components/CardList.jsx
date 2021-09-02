import React from 'react';
import Card from './Card';

function CardList({ robots }) {

    if(true) {
        throw new Error('MOOOOOOOOOOOOOO');
    }

    const cardComponent = robots.map((user, ind) => {
        return <Card key = {ind} id={robots[ind].id} name={robots[ind].name} email = {robots[ind].email} />
    });

    return (
        <div className='cardList'>
            {cardComponent}
        </div>
    );
};

export default CardList;

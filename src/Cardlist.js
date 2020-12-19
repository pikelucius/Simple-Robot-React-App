import React from 'react';
import Card from './Card';


export default function Cardlist({ robots }) {
    return (
        <div>
            {
                robots.map((robot, i) => {
                   return <Card key={i} name={robots[i].name} email={robots[i].email} id={robots[i].id} />
                } )
            }
        </div>
    )
}

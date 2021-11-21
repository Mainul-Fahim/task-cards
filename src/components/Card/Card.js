import React from 'react';
import CardBody from '../CardBody/CardBody';
import CardFooter from '../CardFooter/CardFooter';
import CardHeader from '../CardHeader/CardHeader';

const CardStyle = {
    width: '240px',
    height: '195px',
    border: '1px solid lightgray',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    transition: '0.3s',
    borderRadius: '5px'
};
const Card = ({cardData}) => {
   
    const {name,originType,intents,dateUpdated} = cardData;
   
    return (
        <div style={CardStyle}>
            <CardHeader originType={originType}/>
            <CardBody name={name} intents={intents}/>
            <CardFooter dateUpdated={dateUpdated}/>
        </div>
    );
};

export default Card;
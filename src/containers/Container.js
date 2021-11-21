import React from 'react';
import Card from '../components/Card/Card';

const GridContainer = {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto auto',
    gridGap: '8px',
    backgroundColor: 'white',
    padding: '10px'

};

const Container = ({data,filteredCards}) => {
    return (
        <div style={GridContainer}>
            {
                data.map(cardData=><Card cardData={cardData}/>)
            }
        </div>
    );
};

export default Container;
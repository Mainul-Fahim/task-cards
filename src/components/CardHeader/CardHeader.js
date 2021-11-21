import React from 'react';
import image from '../../assets/images/boltIcon.svg';

const CardHeader = ({originType}) => {
    return (
        <div style={{display: 'flex',marginLeft:'5px'}}>
            <img src={image} alt="img" />
            <p style={{marginLeft:'5px',color:'#00b287'}}>{originType}</p>
        </div>
    );
};

export default CardHeader;
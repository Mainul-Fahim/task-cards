import React from 'react';
import CommonButton from '../CommonButton/CommonButton';

const CardBody = ({name,intents}) => {
    return (
        <div style={{lineHeight:'0',marginLeft:'5px'}}>
            <h3 style={{color:'#07114b'}}>{name}</h3>
            <small style={{color: '#6b747f',marginLeft:'5px'}}>{intents}</small>
            <div style={{display: 'flex',marginTop: '5px'}}>
            <CommonButton label={'View'} primary={'primary'}/>
            <CommonButton label={'Remove'}/>
            </div>
        </div>
    );
};

export default CardBody;
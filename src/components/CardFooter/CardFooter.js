import React from 'react';

const CardFooter = ({dateUpdated}) => {
    return (
        <footer style={{marginTop:'10px',marginLeft:'5px',borderTop:'1px solid lightgray',lineHeight:"0",width:'100%'}}>
            <p style={{fontSize:'6',color:'#6b747f'}}>{Date(dateUpdated).toString().slice(0,25)}</p>
        </footer>
    );
};

export default CardFooter;
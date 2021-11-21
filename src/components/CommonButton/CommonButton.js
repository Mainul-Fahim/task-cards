import React from 'react';

const PrimaryButtonStyle = {
    margin: '10px 20px',
    border: '2px solid black',
    borderRadius: '29px',
    backgroundColor: 'white',
   
    fontSize: '14px',
    cursor: 'pointer',
    borderColor: '#2196F3',
    color: '#0045ca',
    width: '85px',
    height: '25px'

};

const SecondaryButtonStyle = {
    margin: '10px 20px',
    border: '2px solid black',
    borderRadius: '29px',
    backgroundColor: 'white',
  
    fontSize: '14px',
    cursor: 'pointer',
    borderColor: '#dc2c00',
    color: '#dc2c00',
    width: '85px',
    height: '25px'
};

const CommonButton = ({ label, primary, handleClick }) => {
    return (
        <button
            style={primary ? PrimaryButtonStyle : SecondaryButtonStyle}
            onClick={handleClick}
        >
            {label}
        </button>
    );
};

export default CommonButton;
import React from 'react'
import './roundedContainer.css';

const RoundedContainer = ({className, onClick, children}) => {
    return (
    <span onClick={onClick} className={`rounded-container ${className}`}>
        {children}
    </span>
    )};

export default RoundedContainer
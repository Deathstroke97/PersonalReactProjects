import React from 'react';
import './Char.css';

const char = (props) => {
    return (
        <div className="Char" onClick = {props.delete}>
            <p>{props.char}</p>
        </div>
    )
}

export default char;
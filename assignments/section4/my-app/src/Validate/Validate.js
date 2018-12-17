import React from 'react';

const validate = ({length}) => {
    let message = "Text too short";
    if (length > 5) message = "Text long enough";
    return (
        <p>{message}</p>
    )
}

export default validate;
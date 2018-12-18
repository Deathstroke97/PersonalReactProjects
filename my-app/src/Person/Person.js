import React from 'react';
import classes from './Person.css';

const person = ({name, age, children, click, changed}) => {

    return (
        <div className={classes.Person}>
            <p onClick = {click}>I am {name} and I am {age}</p>
            <p>{children}</p>
            <input type="text" onChange = {changed} value={name}/>
        </div>
    )
}

export default person;
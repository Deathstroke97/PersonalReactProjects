import React, { Component } from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';

class Person extends Component {
    render() {
        return (
            <>
                <p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age}</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </>
        )
    }
}

export default withClass(Person, classes.Person);
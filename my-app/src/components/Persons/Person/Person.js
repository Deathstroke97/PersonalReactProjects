import React, { Component } from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';
import { AuthContext } from '../../../containers/App';


class Person extends Component {
    constructor(props) {
        super(props)
        this.inputElement = React.createRef()
    }

    componentDidMount() {
        if (this.props.position == 0) {
            this.inputElement.current.focus();
        }
    }

    focus() {
        this.inputElement.current.focus()
    }

    render() {
        return (
            <>  
                <AuthContext.Consumer>
                    {auth => auth ? <p>I am authenticated</p>: null}
                </AuthContext.Consumer>
                    <p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age}</p>
                    <p>{this.props.children}</p>
                    <input 
                        ref={this.inputElement}
                        type="text" 
                        onChange={this.props.changed} 
                        value={this.props.name} />
               
            </>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func,

}

export default withClass(Person, classes.Person);
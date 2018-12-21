import React, { Component, PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {

    constructor(props) {
        super(props)
        this.lastPersonRef = React.createRef();
    }

    componentDidMount() {
        this.lastPersonRef.current.focus()
    }

    render() {
        return this.props.persons.map((person, index) => {
            return <Person
                ref = {this.lastPersonRef}
                name={person.name}
                position={index}
                age={person.age}
                click={() => this.props.clicked(index)}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)}
            />
        })
    }
}

export default Persons;

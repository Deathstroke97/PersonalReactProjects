import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {

  state = {
    persons : [
      {id: 'ssgdf', name: 'Azat', age: 21},
      {id: 'adfadf', name: 'Askar', age: 17},
      {id: 'fhsths', name: 'Almas', age: 11},
    ], 
    showPersons: false,
  }
  
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => person.id === id);
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = <Persons 
                  persons = {this.state.persons}
                  clicked = {this.deletePersonHandler}
                  changed = {this.nameChangeHandler}/>
    }
    
    return (
        <div className={classes.App}>
        
          <Cockpit 
            persons = {this.state.persons} 
            showPersons = {this.state.showPersons} 
            clicked = {this.togglePersonsHandler}
          />
          {persons}
        </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';


export const AuthContext = React.createContext(false);

class App extends Component {

  state = {
    persons: [
      { id: 'ssgdf', name: 'Azat', age: 21 },
      { id: 'adfadf', name: 'Askar', age: 17 },
      { id: 'fhsths', name: 'Almas', age: 11 },
    ],
    showPersons: false,
    toggleClicked: 0,
    authenticated: false,
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => person.id === id);
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {

    const doesShow = this.state.showPersons;
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }
    });
  }

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }

  loginHandler = () => {
    this.setState({authenticated: true})
  }

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangeHandler} />
    }
    
    return (
      <>
        <Cockpit
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler}
          login = {this.loginHandler}
        />
        <AuthContext.Provider value = {this.state.authenticated}>
          {persons}
        </AuthContext.Provider>
      </>
    );
  }
}

export default withClass(App, classes.App);

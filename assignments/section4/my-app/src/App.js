import React, { Component } from 'react';
import './App.css';
import Validate from './Validate/Validate';
import Char from './Char/Char';

class App extends Component {
  state = {
    userInput: ''
  }

  handleChange = (event) => {
    this.setState({userInput: event.target.value})
  }

  deleteChar = (index) => {
    let text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({userInput: updatedText})
  }

  render() {
    const containers = this.state.userInput.split('').map((ch, index) => {
        return <Char char = {ch} key={index} delete={() => this.deleteChar(index)} />
    })
    return (
      <div>
        <input type = "text" onChange = {this.handleChange} />
        <p>{this.state.userInput}</p>
        <Validate length = {this.state.userInput.length}/>
        {containers}
      </div>
    );
  }
}

export default App;

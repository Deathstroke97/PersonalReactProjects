import React, { Component } from 'react';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom'; 
import Main from './containers/Main/Main';

class App extends Component {
  render () {
    return (
        <BrowserRouter>
          <div>
            <Main/>
          </div>
        </BrowserRouter>
        
    );
  }
}

export default App;

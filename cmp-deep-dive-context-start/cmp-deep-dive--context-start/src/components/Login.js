import React, { Component } from 'react';

import  AuthContext  from '../auth-context';



class Login extends Component {
    static contextType = AuthContext;
    
    render() {
      console.log('this.context: ', this.context, 'contextType: ', this.contextType);
        return (
            <button onClick={this.context.toggleAuth}>
              {this.context.isAuth ? 'Logout' : 'Login'}
            </button>
        );
    }
}

export default Login;

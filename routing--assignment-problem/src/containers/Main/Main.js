import React, { Component } from 'react';
import Courses from '../Courses/Courses';
import Course from '../Course/Course';
import Users from '../Users/Users';
import { Route,  NavLink, Switch, Redirect} from 'react-router-dom';
import './Main.css';

class Main extends Component {
    render() {
        return (
            <header>
                <nav>
                    <ul style = {{textDecoration: 'none'}}>
                        <li style = {{display: 'inline-block', margin: "10px"}}><NavLink to ="/courses">Courses</NavLink></li>
                        <li style = {{display: 'inline-block', margin: "10px"}}><NavLink to = "/users">Users</NavLink></li>
                    </ul>
                </nav>
            <Switch>
                <Route path = '/' exact component = {Courses}></Route>
                <Route path = '/courses' component = {Courses} />
               
                <Route path = '/Users' exact component = {Users} />
                <Redirect from = '/all-courses' to = '/courses'/>
                <Route render = {() => <h1>Not found</h1>} />
                {/* <Route component = {NOt found component}/> */}
            </Switch>
            </header>
        );
    }
}

export default Main;

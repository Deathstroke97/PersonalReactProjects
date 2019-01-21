import React, { Component } from 'react';
// import axios from 'axios';
import axios from '../../axios';
import './Blog.css';
import Posts from './Posts/Posts';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
// import NewPost from './NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent';

const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});



class Blog extends Component {
    
    state = {
        auth: true,
    }

    render () {
        return (
            <div>
                <header className = 'Blog'>
                    <nav>
                        <ul>
                            <li><NavLink 
                                activeClassName = 'active'
                                to = "/posts/" 
                                exact>Posts</NavLink></li>
                            <li><NavLink  exact to = {{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-summit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path= "/" exact render = { () => <h1>I am in astana</h1> } /> */}
                
                <Switch>
                    {this.state.auth ? <Route path = "/new-post" component = {AsyncNewPost} /> : null}
                    <Route path = "/posts"  component = {Posts} />
                    <Route render = {() => <h1>Not found</h1>} />
                    {/* <Redirect from = '/' to = '/posts' /> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;













import React, { Component } from 'react';
import queryString from 'query-string'

class Course extends Component {
    
    // state = {
    //     title: ''
    // }
    
    // componentDidMount() {
    //     this.parseQueryParams()
    // }

    // componentDidUpdate() {
    //     this.parseQueryParams()
    // }
    
    // parseQueryParams() {
    //     const query = new URLSearchParams(this.props.location.search);
    //     console.log(query);
    //     for (let param of query.entries()) {
    //         if (this.state.title != param[1]) {
    //             this.setState({title: param[1]})
    //         }
    //     }
    // }

    render () {
        const values = queryString.parse(this.props.location.search); 
        return (
            <div>
                <h1>{values.title}</h1>
                <p>{this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;
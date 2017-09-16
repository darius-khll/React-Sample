import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Init extends Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
                <Link to="/app/1">App</Link> <br />
                <Link to="/signup">Signup</Link>
            </div>
        )
    }
}

export default Init;
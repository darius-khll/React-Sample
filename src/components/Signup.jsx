import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Signup extends Component {
    render() {
        return (
            <div>
                <h1>Signup</h1>
                <Link to="/App">App</Link>
            </div>

        )
    }
}

export default Signup;
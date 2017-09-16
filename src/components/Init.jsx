import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Init extends Component {
    constructor(props) {
        super(props);
        this.state = {
            appId: 0
        }
    }

    onInputchange(e) {
        this.setState({ appId: e.target.value })
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
                <input type="number" onChange={e => this.onInputchange(e)} />
                <br />
                <Link to={`/app/${this.state.appId}`}>App</Link> <br />
                <Link to="/signup">Signup</Link>
            </div>
        )
    }
}

export default Init;
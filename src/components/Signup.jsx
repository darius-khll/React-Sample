import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {observable} from 'mobx';
import {observer} from "mobx-react";

let time = observable({
    val: new Date(),
    parent: {
        child: 1
    }
});

// @observer
const Signup = observer(class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = { src: 'https://facebook.github.io/react/img/logo.svg' }

         setInterval(() => {
            time.val = new Date();
            time.parent.child++;
        }, 1000);
    }

    changeSrc() {
        this.setState({ src: 'nothing' });
    }

    render() {
        let img = this.state.src;
        return (
            <div>
                <h1>Signup - {time.val.toLocaleTimeString()}</h1>
                <img height="100" width="100" src={img} /> <br />
                <button onClick={() => this.changeSrc()}>Change</button> <br />
                <Link to="/App">App</Link>

                <h1>{time.parent.child}</h1>
            </div>

        )
    }
})

export default Signup;
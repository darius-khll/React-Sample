import React, { Component } from 'react';

class Child extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <button onClick={e => this.props.changeData()}>Child should change Data</button>
            </div>
        )
    }
}

export default Child;
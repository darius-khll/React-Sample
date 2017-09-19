import React, { Component } from 'react';
import Parent from './parent';

class GrandParent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: 0
        }

        this.changeData = this.changeData.bind(this);
    }

    changeData() {
        this.setState({ data: this.state.data + 1 });
    }

    render() {
        return (
            <div>
                <h1>it will change: {this.state.data}</h1>
                <Parent changeData={this.changeData} />
            </div>
        )
    }
}

export default GrandParent;
import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            datas: [1, 2, 3]
        }
    }

    changeParentState() {
        this.state.datas.push(this.state.datas[this.state.datas.length - 1] + 1);
        this.setState({datas: this.state.datas});
    }

    render() {
        return (
            <div>
                {this.state.datas.map((data, key) => {
                    return (<div key={key}>{data}</div>);
                })}

                <button onClick={() => this.changeParentState()}>change parent state</button>
            </div>
        )
    }
}

export default Clock;
import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            datas: [1, 2, 3]
        }
    }

    changeLists() {
        let lists = this.state.datas;
        lists.push(4);
        this.setState({datas: lists});
    }

    render() {
        return (
            <div>
                <h3>Time</h3>
                Clock time counter {this.props.counter}

                {this.state.datas.map((data, key) => {
                    return (<div key={key}>{data}</div>);
                })}

                <button onClick={ev => this.changeLists()}>Change Click</button>
            </div>
        )
    }
}

export default Clock;
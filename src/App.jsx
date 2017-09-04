import React, { Component } from 'react';
import Clock from './Clock'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            deadLine: 'december 25, 2017',
            counter: 0,
            input: 'hi'
        };
    }
    changeDeadLine() {
        this.setState({ deadLine: 'november 25, 2017' });
    }

    changeInput(event) {
        this.setState({ counter: this.state.counter + 1, input: event.target.value });
    }

    async getData() {
        let data = await fetch('/getData', { method: 'GET' });
    }

    render() {
        return (
            <div>
                <Clock counter={this.state.counter} />
                <h3>Form1 - {this.state.deadLine}</h3>
                <h5>counter: {this.state.counter}</h5>
                <span className="App">description</span>
                <br />

                <input placeholder='placeHolder'
                    onChange={event => this.changeInput(event)}
                    onKeyPress={async (event) => {
                        console.log('event.key', event.key)

                        if (event.key === 'Enter') {
                            await this.getData();
                        }
                    }
                    }
                    value={this.state.input} />

                <button onClick={() => this.changeDeadLine()}>Submit</button>

            </div>
        )
    }
}

export default App;
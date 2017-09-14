import React, { Component } from 'react';
import { observer } from "mobx-react";

// export const Test = () => {
//     return(
//         <h1>Test.jsx</h1>
//     )
// }

const Test = observer(class Test extends Component {
    constructor(props) {
        super(props);
        this.store = this.props.store;
    }
    changePatentState() {
        this.store.child = 0;
    }

    render() {
        return (
            <div>
                <h4>Test Component {this.store.child}</h4>
                <button onClick={e => this.changePatentState()}>Update Parent</button>
            </div>
        )
    }
});

export default Test;
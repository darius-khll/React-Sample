import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {
    render() {
        return (
            <div>
                {/* binding change data functions */}
                <Child changeData={this.props.changeData} />
            </div>
        )
    }
}

export default Parent;
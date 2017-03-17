import React, { Component } from 'react';
import AllCourses from './screens/AllCourses';

import './App.css';

const sx = {
    leftButton: {
        float: 'left',
        color: '#ed1262',
        fontWeight: 400,
        fontSize: 15,
    },
    rightButton: {
        float: 'right',
        color: '#ed1262',
        fontWeight: 400,
        fontSize: 15,
    }
};

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <div style={sx.leftButton}>All Courses</div>
                    <div className="hidden" style={sx.rightButton}>Let's Learn</div>
                </div>

                <AllCourses />

            </div>
        );
    }
}

export default App;

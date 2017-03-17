import React, { Component, PropTypes } from 'react';

import './AllCourses.css';


const CourseItem = ({ id, name, description }) => {
    return (
        <div className="CourseItem">
            <div>
                <span>#{id}</span>
                <h2>{name}</h2>
                <p>{description}</p>
                <small>TAGS <a href="#">javascript</a><a href="#">react</a><a href="#">redux</a></small>
            </div>
        </div >
    );
};

class AllCourses extends Component {
    constructor(state, props) {
        super(state, props);

        this.state = {
            courses: [
                { id: 1, name: "React.js: Getting Started", description: "Learn the basics of React.js, and build an in-browser, math skills kids' game from scratch with it." },
                { id: 2, name: "Building Applications with React and Redux in ES6", description: "Learn how to use Redux, React Router, and ES6 to build a real world app with React. Use Webpack, Babel, ESLint, npm scripts, Mocha, Enzyme, and more to build a rich, one step, custom React development environment and build process from the ground up." },
                { id: 3, name: "Building Applications with React and Flux", description: "Get started with React, React Router, and Flux by building a fast, data-driven single page application." },
                { id: 4, name: "React Fundamentals", description: "React is a high-performance, reactive UI library for client-side web applications." }
            ]
        }
    }

    render() {
        return (
            <div className='scrollable-area' style={{ height: "calc(100vh - 100px)" }}>
                <div className="AllCourses">
                    {
                        this.state.courses.map((course, i) => {
                            return (
                                <CourseItem key={i} id={course.id} name={course.name} description={course.description} />
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

AllCourses.propTypes = {

};

export default AllCourses;

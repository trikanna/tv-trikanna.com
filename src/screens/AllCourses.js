import React, { Component } from 'react';
import styled from 'styled-components';
import { colors } from '../global.styles';

const CourseList = styled.div`
  padding-top: 2px;
  padding-bottom: 1px;
`;

const CourseItem = styled.div`
  border-radius: 1.5px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.08);
  padding: 5px 16px 17px 16px;
  margin: 10px 11px 12px 11px;
  background: white;
  position: relative;
  border: 0.5px solid #ccc;
`;

const Title = styled.h2`
  width: 90%;
  margin-top: 10px;
  font-weight: 700;
  letter-spacing: 0.5px;
  font-size: 22px;
`;

const Description = styled.p`
  width: 90%;
`;

const TagsContainer = styled.div`
  margin-top: 20px;
  font-size: 11px;
  color: #777;
  font-weight: 500;

  a {
    text-decoration: none;
    display: inline-block;
    color: white;
    background: ${colors.primary};
    padding: 2px 5px 2.5px 5px;
    margin: 6px 7px 0 0;
    text-transform: uppercase;
  }
`;


const Item = ({ id, name, description }) => {

  const tagsList = [
    { id: 1, name: 'react' },
    { id: 2, name: 'redux' },
    { id: 3, name: 'firebase' },
    { id: 4, name: 'node' },
    { id: 5, name: 'react native' },
    { id: 6, name: 'real-time' }
  ];

  return (
    <CourseItem>
      <Title>{name}</Title>
      <Description>{description}</Description>
      <TagsContainer>
        {
          tagsList.map(tag => {
            return (
              <a key={tag.id} href="">{tag.name}</a>
            )
          })
        }
      </TagsContainer>

    </CourseItem >
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
      <div className='scrollable-area' style={{ height: "calc(100vh - 114px)" }}>
        <CourseList>
          {
            this.state.courses.map((course, i) => {
              return (
                <Item key={i} id={course.id} name={course.name} description={course.description} />
              )
            })
          }
        </CourseList>
      </div>
    );
  }
}

export default AllCourses;

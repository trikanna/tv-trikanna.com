import React, { Component } from 'react';
import styled from 'styled-components';
import { colors } from '../global.styles';
import { GoTerminal } from 'react-icons/lib/go';
import { IoIosFilm } from 'react-icons/lib/io';


const Container = styled.div`
  height: ${props => props.expanded ? '300px' : '64px'};
  padding: 1px 8pt 0 8pt;
  font-size: 17px;
  font-weight: 700;
  position: relative;
  border-bottom: 0.5px solid ${colors.line};

  background-image: ${props => props.withImage ? 'linear-gradient(20deg, #111 15%, #ED1E79 100%), url(https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb)' : 'linear-gradient(20deg, #2E3192 0%, #ED1E79 100%)' };
  background-blend-mode: ${props => props.withImage ? 'hard-light' : 'none'};
  filter: none;
  background-size: ${props => props.withImage ? 'cover' : 'initial'};
  background-repeat: ${props => props.withImage ? 'no-repeat' : 'initial'};
`;

const HeaderWrapper = styled.div`
  height: 44px;
  margin-top: 20px;
`;

const HeaderButton = styled.div`
  font-weight: 400;
  height: 44px;
  line-height: 41px;
  text-transform: capitalize;
  font-size: 15px;
  color: ${colors.white};

  svg {
    margin-top: -1.5pt;
    color: ${colors.white};
    font-size: 18pt;
    margin-right: 7px;
  }
`;

const CourseIntro = styled.div`
  color: ${colors.white};

  h2 {
    margin-top: 30px;
  }

  p {
    width: 90%;
    font-size: 11pt;
    margin-bottom: 0;
  }
`;

const CourseStatus = styled.div`
  color: white;
  height: 20px;
  line-height: 20px;
  width: calc(100% - 250px);
  max-width: 200px;
  position: absolute;
  right: 16px;
  top: 33px;

  h4 {
    font-weight: 400;
    font-size: 7pt;
    margin: 0;
    text-transform: uppercase;
    float: left;
    width: 65px;
    letter-spacing: 0.35pt;
  }
`;

const Progress = styled.div`
  width: calc(100% - 65px);
  float: left;
  background: ${colors.black};
  border-radius: 1.5pt;
  height: 2pt;
  margin-top: 6.5pt;

  span {
    display: inline-block;
    background: ${colors.white};
    height: 2pt;
    border-radius: 1.5pt;
  }
`;

class Header extends Component {
  constructor(props) {
    super(props);

    console.info(props);
  }

  render() {

    if (this.props.expanded && !this.props.withImage) {

      return (
        <Container expanded>

          <HeaderWrapper>
            <HeaderButton style={{ float: 'left' }}><IoIosFilm />Course</HeaderButton>
          </HeaderWrapper>

          <CourseIntro>
            <h2>React.js: Getting Started</h2>
            <p>Learn the basics of React.js, and build an in-browser, math skills kids' game from scratch with it.</p>
          </CourseIntro>

          <CourseStatus>
            <h4>Progress</h4>
            <Progress><span style={{ width: '10.7%' }}>&nbsp;</span></Progress>
          </CourseStatus>

        </Container>
      );

    } else if (this.props.withImage) {
      return (
        <Container expanded withImage>

          <HeaderWrapper>
            <HeaderButton style={{ float: 'left' }}><IoIosFilm />Course</HeaderButton>
          </HeaderWrapper>

          <CourseIntro>
            <h2>Building Applications with React and Redux in ES6</h2>
            <p>Learn how to use Redux, React Router, and ES6 to build a real world app with React. Use Webpack, Babel, ESLint, npm scripts, Mocha, Enzyme, and more.</p>
          </CourseIntro>

          <CourseStatus>
            <h4>Progress</h4>
            <Progress><span style={{ width: `${this.props.progress}%` }}>&nbsp;</span></Progress>
          </CourseStatus>

        </Container>
      );

    } else {

      return (
        <Container>
          <HeaderWrapper>
            <HeaderButton style={{ float: 'left' }}><GoTerminal />{this.props.label}</HeaderButton>
            <HeaderButton style={{ float: 'right', display: 'none' }}>+</HeaderButton>
          </HeaderWrapper>
        </Container>
      );

    }

  }
}

Header.propTypes = {
  label: React.PropTypes.string.isRequired,
  expanded: React.PropTypes.bool,
  withImage: React.PropTypes.bool,
  progress: React.PropTypes.number
};

export default Header;

import React, { Component } from 'react';
import AllCourses from './screens/AllCourses';
import CourseDetail from './screens/CourseDetail';
import styled from 'styled-components';

import { colors } from './global.styles';

import ReactGA from 'react-ga';

import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Redirect
} from 'react-router-dom';

import {
  IoIosFilmOutline,
  IoIosBookmarksOutline,
  IoIosGearOutline,
  IoIosUploadOutline
} from 'react-icons/lib/io';

const AppContainer = styled.div`
  background: ${colors.gray};

  height: 100%;
  width: 100%;
  overflow: hidden;
`;

const Tabs = styled.div`
  height: 49pt;
  background: ${colors.white};
  border-top: 0.5px solid ${colors.line};
  background: rgb(249, 249, 249);

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: center;

    li {
      width: auto;
      min-width: 60px;
      text-align: center;
      width: 25%;

      &:first-child a {
        border-left: none;
      }

      a {
        text-decoration: none;
        padding: 0 15px;
        display: block;
        // background: ${colors.white};
        //color: ${colors.primary};

        // border-left: 0.5px solid ${colors.line};
        height: 49pt;
        line-height: 83pt;
        font-size: 10pt;
        position: relative;
        color: rgb(141,141,141);

        &.active {
          color: ${colors.gradientFrom};
        }

        svg {
          margin-right: 5px;
          font-size: 33px;
          position: absolute;
          top: 7pt;
          left: calc(50% - 12pt);
          width:  24pt;
          height: 24pt;
        }
      }
    }
  }

`;

class App extends Component {
  constructor(props) {
    super(props);

    this.initializeAnalytics();
  }

  initializeAnalytics() {
    if (process.env.NODE_ENV === 'production') {
      ReactGA.initialize('UA-92692542-1');
      ReactGA.pageview(window.location.pathname);
    }
  }

  render() {
    return (
      <Router>
        <AppContainer>

          <Route exact path="/" render={() => (
            <Redirect to="/courses/all" />
          )} />

          <Route path="/courses/:id" component={AllCourses} />
          <Route path="/course/:id" component={CourseDetail} expanded={true} />

          <Tabs>
            <ul>
              <li><NavLink to="/courses/all"><IoIosFilmOutline />Courses</NavLink></li>
              <li><NavLink to="/articles/all"><IoIosBookmarksOutline />Articles</NavLink></li>
              <li><NavLink to="/share"><IoIosUploadOutline />Share</NavLink></li>
              <li><NavLink to="/settings"><IoIosGearOutline />Settings</NavLink></li>
            </ul>
          </Tabs>

        </AppContainer >
      </Router>
    );
  }
}

export default App;
